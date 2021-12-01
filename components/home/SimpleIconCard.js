import Image from "next/image";
import Fade from "react-reveal/Fade";

function SimpleIconCard({ icon, title, text }) {
  return (
    <Fade bottom>
      <div className="flex flex-col max-w-xs mx-auto">
        <div>
          <div className="relative w-64 h-40 mx-auto">
            <Image
              src={icon}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              alt={title}
            />
          </div>
        </div>
        <div className="h-16">
          <h3 className="font-bold text-lg lg:text-2xl">{title}</h3>
        </div>
        <div>
          <p>{text}</p>
        </div>
      </div>{" "}
    </Fade>
  );
}

export default SimpleIconCard;
