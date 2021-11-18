import Image from "next/image";

function IconCard({ title, img, color, shadow }) {
  return (
    <div
      className={`${
        color ? color : "bg-white"
      } rounded-2xl w-full max-w-sm mx-auto h-56 ${shadow && "shadow-custom3"}`}
    >
      <div className="flex flex-col text-center">
        <div className="relative transform -translate-y-7 w-52 h-40 mx-auto">
          <Image src={img} layout="fill" objectFit="contain" objectPosition="bottom" alt={title} />
        </div>
        <h3 className="text-navy-light1 font-semibold mx-4 transform -translate-y-2">{title}</h3>
      </div>
    </div>
  );
}

export default IconCard;
