import Image from "next/image";

function FullWidthImageCard({ img, number, title, text, alignRight }) {
  return (
    <div className={`flex flex-col sm:flex-row max-w-4xl lg:max-w-9/10 2xl:max-w-8/10 ${alignRight && "ml-auto"}`}>
      <div className={`${alignRight && "sm:order-2"} relative leading-none flex-none w-full h-60 sm:h-80 lg:h-88 2xl:h-96 sm:flex sm:items-stretch sm:w-2/6 md:w-5/12`}>
        <Image
          className="rounded-t-xl sm:rounded-none"
          src={img}
          layout="fill"
          objectFit="cover"
          alt={title}
        />
      </div>
      <div className={`bg-white shadow-custom3 rounded-b-xl sm:rounded-b-none ${alignRight ? "sm:rounded-l-xl sm:ml-5" : "sm:rounded-r-xl sm:mr-5"} p-5 sm:px-7 md:px-10 lg:p-11 2xl:px-16 2xl:py-14 flex flex-col gap-2 sm:gap-3 md:gap-4 lg:gap-8`}>
        <div className="flex flex-row gap-5 items-center">
          <div>
            <p className="text-6xl xl:text-7xl text-navy-light1 font-lexend">
              {number}
            </p>
          </div>
          <div>
            <h3 className="text-main font-bold lg:font-extrabold lg:text-2xl text-lg">
              {title}
            </h3>
          </div>
        </div>
        <div>
          <p className="text-base leading-relaxed text-navy-light1 my-2">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FullWidthImageCard;
