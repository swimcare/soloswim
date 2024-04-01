import Image from "next/image";
import Tooltip from "../../general/Tooltip";

function DubbelAttribuut({
  icon1,
  alt1,
  icon2,
  alt2,
  name,
  tooltipText,
  bestelButton,
}) {
  const card = () => {
    return (
      <div className="bg-white rounded-xl shadow-custom1 pt-8 h-full">
        <div className="flex flex-col gap-1 items-stretch">
          <div className="flex flex-row mb-2 justify-center content-center gap-5">
            <div className="self-center h-20 w-20 ml-auto flex-shrink-0 mb-1 relative">
              <Image
                src={icon1}
                alt={alt1}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}></Image>
            </div>
            <div className="self-center h-10 w-20 mr-auto flex-shrink-0 relative">
              <Image
                src={icon2}
                alt={alt2}
                fill
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center"
                }}></Image>
            </div>
          </div>
          <div className="text-center text-navy-light1 mb-14 text-tiny">
            {name}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="col-span-2">
      <Tooltip
        textClassname="text-main"
        className="bg-main w-1/2 text-white"
        iconClassName="text-main border-white"
        position="top"
        title={card()}
        content={tooltipText}
      ></Tooltip>
    </div>
  );
}

export default DubbelAttribuut;
