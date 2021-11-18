import Image from "next/image";

function HomeProductItemCard() {
  return (
    <div className="bg-grey-light4 rounded-3xl border-5 border-soloswim-orange h-96 w-80 pt-10 px-10">
      <div className="flex flex-col h-full">
        <div className="relative h-56 flex-shrink-0">
          <Image
            src="/images/home/bundel-front.png"
            layout="fill"
            objectFit="contain"
            alt="zwemschema"
          />
        </div>
        <div className="my-6 text-center">
          <h4 className="text-navy-light1 font-bold uppercase">
            100 meter borstcrarwl leren zwemmen
          </h4>
          <p className="text-sm text-navy-light1">€ 9,99</p>
        </div>
      </div>
    </div>
  );
}

export default HomeProductItemCard;
