import SectionStructure from "components/home/structure/SectionStructure";
import HeroComponent from "../components/home/hero/SectionHero";
import SectionFeatures from "../components/home/features/SectionFeatures";
import SectionTargets from "components/home/targets/SectionTargets";
import SectionReviews from "components/home/reviews/SectionReviews";

export default async function Page() {
  return (
    <>
      <HeroComponent />
      <SectionFeatures />
      <SectionStructure />
      <SectionTargets />
      <SectionReviews />
    </>
  );
}
