const path = require("path");
const fs = require("fs");
const matter = require("gray-matter");
const { applySaleToPrice } = require("./pricing");

const postsDirectory = path.join(process.cwd(), "products");

function readFrontmatter(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  if (!fs.existsSync(fullPath)) return null;
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  return { id, ...matterResult.data };
}

function findByProductId(productId) {
  if (!productId) return null;
  const fileNames = fs.readdirSync(postsDirectory);
  for (const fileName of fileNames) {
    if (!fileName.endsWith(".md")) continue;
    const id = fileName.replace(/\.md$/, "");
    const data = readFrontmatter(id);
    if (data?.product_id === productId) return data;
  }
  return null;
}

/**
 * Resolve authoritative list + sale price for a cart line (never trust client price).
 */
function resolveCheckoutLinePrice(item) {
  const product =
    (item?.id && readFrontmatter(item.id)) ||
    findByProductId(item?.product_id);

  if (!product) {
    throw new Error(
      `Unknown product for checkout: id=${item?.id} product_id=${item?.product_id}`
    );
  }

  let listPrice = Number(product.price);

  if (
    item?.type &&
    product.sizeVariants &&
    product.sizeVariants[item.type]?.price != null
  ) {
    listPrice = Number(product.sizeVariants[item.type].price);
  }

  const priced = applySaleToPrice(listPrice, product.product_id);

  return {
    product,
    listPrice: priced.listPrice,
    price: priced.price,
    discountPercent: priced.discountPercent,
  };
}

module.exports = {
  readFrontmatter,
  findByProductId,
  resolveCheckoutLinePrice,
};
