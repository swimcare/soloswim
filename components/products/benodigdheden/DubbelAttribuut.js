import Image from "next/image";

function DubbelAttribuut(props) {
  return (
    <div className="bg-white rounded-xl col-span-2 shadow-custom1">
      <div className="flex flex-row mt-10 mb-2 justify-center content-center gap-5">
        <div className="self-center h-20 w-20 mb-1 relative">
          <Image
            src={props.icon1}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={props.alt1}
          ></Image>
        </div>
        <div className="self-center h-20 w-20 mb-1 relative">
          <Image
            src={props.icon2}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
            alt={props.alt2}
          ></Image>
        </div>
      </div>
      <div className="text-center text-navy-light1 my-5 text-tiny">
        {props.name}
      </div>
    </div>
  );
}

export default DubbelAttribuut;
