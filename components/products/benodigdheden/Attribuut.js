import Image from "next/image";
import Tooltip from "../../general/Tooltip";
import Link from "next/link";

function Attribuut({ icon, name, tooltipText, bestelButton }) {
  const card = () => {
    return (
      <div className="bg-white rounded-xl shadow-custom1 pt-8 h-full">
        <div className="flex flex-col gap-3 items-stretch">
          <div className="text-center h-20 w-20 relative mx-auto flex-shrink-0">
            <Image
              src={icon}
              alt={name}
              fill
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "center"
              }}></Image>
          </div>
          <div>
            <div className={`text-navy-light1 text-tiny text-center ${!bestelButton && "mb-7"}`}>
              <p className="mx-2">{name}</p>
            </div>
          </div>
          {bestelButton && (
            <div className="my-5 mt-auto text-center">
              <Link href={bestelButton}>

                <button
                  role="button"
                  className="text-white disabled:opacity-50 text-xs font-semibold uppercase px-3 py-1 rounded-full bg-main tracking-wider shadow-md hover:bg-transparent hover:text-main border-2 border-main"
                >
                  Bekijk
                </button>

              </Link>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
      <Tooltip
        textClassname="text-main"
        className="bg-main w-full text-white"
        iconClassName="text-main border-white"
        position="top"
        title={card()}
        content={tooltipText}
      ></Tooltip>
  );
}

export default Attribuut;
