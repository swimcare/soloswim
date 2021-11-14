import ZwemschemaInhoud from "./ZwemschemaInhoud";

function Inhoudsopgave({ inhoud, editie }) {
  const mappedInhoud = inhoud.map((training, index) => (
    <ZwemschemaInhoud
      key={index}
      number={`${editie ? editie : "1"}.${index + 1}`}
      name={training.title}
      tags={training.tags}
      distance={training.distance}
      previewItem={index + 1}
    />
  ));

  return (
    <div className="p-5">
      <div className="bg-white rounded-xl shadow-custom1 px-2 py-4 md:p-10 text-navy-light1 max-w-4xl">
        {/* only valid for combi... */}
        <div className="text-center mb-2">
          <p className="uppercase">{inhoud[0].type ? inhoud[0].type : "Inhoudsopgave"}</p>
        </div>

        {mappedInhoud}
      </div>
    </div>
  );
}

export default Inhoudsopgave;
