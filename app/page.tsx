import SectionStructure from "components/home/structure/SectionStructure";
import HeroComponent from "../components/home/hero/SectionHero";
import SectionFeatures from "../components/home/features/SectionFeatures";

export default async function Page() {
  return (
    <>
      <HeroComponent />
      <SectionFeatures />
      <SectionStructure />
    </>
  );
}
