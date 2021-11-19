import Image from "next/image";

function SimpleIconCard() {
  return (
    <div className="flex flex-col max-w-sm mx-auto">
      <div>
        <Image
          src="/images/home/waarom-zwemmen1.png"
          width={187}
          height={187}
          alt="Blessurevrij sporten"
        />
      </div>
      <div className="h-16">
        <h3 className="font-bold text-lg lg:text-2xl">Blessurevrij sporten</h3>
      </div>
      <div>
        <p>
          In het water weeg je 90% minder dan op het land, je lichaam
          overbelasten wordt vrijwel onmogelijk. Zo is de kans op een blessure
          veel kleiner!
        </p>
      </div>
    </div>
  );
}

export default SimpleIconCard;
