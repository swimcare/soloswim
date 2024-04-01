import SchemaFeaturesSlider from "./SectionStructureSlider";
import FadeInFromBottom from "../framer/FadeInFromBottom";

type Props = {};

const SectionStructure = (props: Props) => {
  return (
    <section>
      <div className="px-5 sm:px-3 max-w-screen-xl mx-auto py-20 lg:py-32">
        <FadeInFromBottom>
          <h2 className="font-lexend text-slateblue-dark1 font-extrabold text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center mx-10">
            Zo ziet een zwemschema eruit
          </h2>
          <h3 className="font-lexend my-2 text-main font-extrabold text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center mx-10">
            Lekker duidelijk
          </h3>
        </FadeInFromBottom>
        <SchemaFeaturesSlider />
      </div>
    </section>
  );
};

export default SectionStructure;
