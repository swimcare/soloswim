import SectionStructure from "components/SectionStructure/SectionStructure";
import HeroComponent from "../components/SectionHero/SectionHero";
import SectionFeatures from "../components/SectionFeatures/SectionFeatures";

export default async function Page() {
  return (
    <>
      <HeroComponent />
      <SectionFeatures />
      <SectionStructure />
    </>
  );
}
