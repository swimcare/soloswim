import ZwemschemaInhoud from "./ZwemschemaInhoud";

function Inhoudsopgave({ inhoud, editie }) {
  const mappedInhoud = inhoud.map((training, index) => (
    <ZwemschemaInhoud
      key={index}
      number={`${editie}.${index + 1}`}
      name={training.title}
      tags={training.tags}  
      distance={training.distance}
      previewItem={index + 1}
    />
  ));

  return (
    <div className="bg-white rounded-xl drop-shadow-custom1 px-2 py-4 md:p-10 text-navy-light1 max-w-4xl">
      {/* Inhoud elementen, todo: with a foreach loop or map function? also calculate the number */}
      {mappedInhoud}
    </div>
  );
}

export default Inhoudsopgave;
