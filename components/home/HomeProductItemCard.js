import Image from "next/legacy/image";
import Link from "next/link";

function HomeProductItemCard({ borderColor, img, title, price, href }) {
  return (
    <div className="mr-10">
      <Link href={href}>
        <a>
          <div
            className={`bg-grey-light4 rounded-3xl border-5 h-96 w-full max-w-s pt-10 hover:border-main hover:cursor-pointer ${borderColor}`}
          >
            <div className="flex flex-col h-full">
              <div className="relative h-56 flex-shrink-0">
                <Image
                  src={img}
                  layout="fill"
                  objectFit="contain"
                  alt={title}
                />
              </div>
              <div className="my-6 text-center px-6">
                <h4 className="text-navy-light1 font-bold uppercase">
                  {title}
                </h4>
                <p className="text-sm text-navy-light1">€ {price}</p>
              </div>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default HomeProductItemCard;
