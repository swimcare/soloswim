import Image from "next/image";
// import Fade from "react-reveal/Fade";

function SimpleIconCard({ icon, title, text }) {
  return (
    <div className="flex flex-col max-w-xs mx-auto">
      <div>
        <div className="relative w-64 h-40 mx-auto">
          <Image
            src={icon}
            alt={title}
            fill
            sizes="100vw"
            style={{
              objectFit: "contain",
              objectPosition: "bottom",
            }}
          />
        </div>
      </div>
      <div className="h-16">
        <h3 className="font-bold text-lg lg:text-2xl">{title}</h3>
      </div>
      <div>
        <p>{text}</p>
      </div>
    </div>
  );
}

export default SimpleIconCard;
