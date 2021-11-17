import Image from "next/image";

function IconCard({ title, img }) {
  return (
    <div className="bg-white rounded-2xl shadow-custom3 w-full max-w-sm mx-auto h-56">
      <div className="flex flex-col text-center">
        <div className="relative transform -translate-y-5 w-40 h-40 mx-auto">
          <Image src={img} layout="fill" objectFit="contain" alt={title} />
        </div>
        <h3 className="text-navy-light1 font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
}

export default IconCard;
