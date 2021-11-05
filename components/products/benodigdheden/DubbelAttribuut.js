import Image from "next/image";

function DubbelAttribuut(props) {
  return (
    <div className="bg-white rounded-xl col-span-2 shadow-custom1">
      <div className="flex flex-row my-4 justify-center gap-5">
        <Image
          src={props.icon1}
          width={80}
          height={120}
          alt={props.alt1}
        ></Image>
        <Image
          src={props.icon2}
          width={120}
          height={120}
          alt={props.alt2}
        ></Image>
      </div>
      <div className="text-center text-navy-light1 mb-8 text-sm">{props.name}</div>
    </div>
  );
}

export default DubbelAttribuut;
