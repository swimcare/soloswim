import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Inhoudsopgave from "./Inhoudsopgave";

function SubSectionInhoudsopgave({ productData }) {
  return (
    <div className="my-14">
      <div className="md:hidden border-b-3 border-grey-warm border-opacity-25">
        <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
          Inhoudsopgave
        </h2>
      </div>

      <Inhoudsopgave inhoud={productData.inhoud.beginners} />
    </div>
  );
}

export default SubSectionInhoudsopgave;
