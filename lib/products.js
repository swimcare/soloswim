import remark from "remark";
import html from "remark-html";
import remarkBreaks from "remark-breaks";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { enrichProductWithSale } from "./pricing";

const postsDirectory = path.join(process.cwd(), "products");

export function getSortedProductsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allProductsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id + active sale prices
    return enrichProductWithSale({
      id,
      ...matterResult.data,
    });
  });
  // Sort posts by number
  return allProductsData.sort(({ number: b }, { number: a }) => {
    if (a < b) {
      return 1;
    } else if (a > b) {
      return -1;
    } else {
      return 0;
    }
  });
}

export function getSwimmingEquipmentData() {
  const allProducts = getSortedProductsData();
  // Filter products that have isAccessoire property set to true
  return allProducts.filter((product) => product.isAccessoire === true);
}

export function getSwimmingSchemasData() {
  const allProducts = getSortedProductsData();
  // Filter out products that have isAccessoire property set to true
  return allProducts.filter((product) => product.isAccessoire !== true);
}

export function getAllProductIds() {
  const fileNames = fs.readdirSync(postsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

//   It will return the post data based on id:
export async function getproductData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string with breaks support
  const processedContent = await remark()
    .use(remarkBreaks)
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml + sale prices
  return enrichProductWithSale({
    id,
    contentHtml,
    ...matterResult.data,
  });
}
