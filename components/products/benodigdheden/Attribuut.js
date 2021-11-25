import Image from "next/image";
import Tooltip from "../../general/Tooltip";

function Attribuut(props) {
  return (
    <div className="bg-white rounded-xl shadow-custom1">
      <div className="">
        <div className="text-center h-20 w-20 relative mx-auto my-8">
          <Image
            src={props.icon}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={props.name}
          ></Image>
        </div>
        <div>
          <div className="text-navy-light1 text-tiny text-center my-5">
            <p className="mx-2">{props.name}</p>
          </div>
        </div>
      </div>
        <Tooltip
          textClassname="text-main"
          className="bg-black w-full text-white"
          iconClassName="text-black"
          position="top"
          title="Hover me"
          content="the content is very interesting for halluciationsmatters and short words"
        >
        </Tooltip>
    </div>
  );
}

export default Attribuut;
