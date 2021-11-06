import Image from "next/image";

function Attribuut(props) {
    return (
        <div className="bg-white rounded-xl shadow-custom1">
        <div className="text-center mt-5 mb-2">
          <Image
            src={props.icon}
            width={120}
            height={120}
            alt={props.alt}
          ></Image>
          <div className="text-navy-light1 text-tiny">
            <p className="mx-2">{props.name}</p>
          </div>
        </div>
      </div>
    )
}

export default Attribuut
