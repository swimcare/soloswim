import { Fragment } from "react";
import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Inhoudsopgave from "./Inhoudsopgave";
import InhoudsopgaveCombi from "./InhoudsopgaveCombi";

function SubSectionInhoudsopgaveNiveaus({ productData }) {
  return (
    <div className="my-14">
      <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
        <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
          Inhoudsopgave
        </h2>
      </div>

      {/* accordion system */}
      <Accordion defaultPanel="inhoud-beginners">
        <AccordionItem
          toggle="inhoud-beginners"
          itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
          iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
        >
          Beginners bundel
        </AccordionItem>
        <AccordionPanel
          id="inhoud-beginners"
          panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
        >
          {!productData.isCombi ? (
            <Inhoudsopgave
              inhoud={productData.inhoud.beginners}
              editie={productData.editie}
            />
          ) : (
            <Fragment>
              <Inhoudsopgave
                inhoud={productData.inhoud.beginners}
                editie={productData.editie}
              />
              {/* doe hier een andere array targeten (van andere type) */}
              <Inhoudsopgave
                inhoud={productData.inhoud.beginners}
                editie={productData.editie}
              />
            </Fragment>
          )}
        </AccordionPanel>
        <AccordionItem
          toggle="inhoud-semi-gevorderden"
          itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
          iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
        >
          Semi-gevorderden bundel
        </AccordionItem>
        <AccordionPanel
          id="inhoud-semi-gevorderden"
          panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
        >
          <Inhoudsopgave
            inhoud={productData.inhoud.semigevorderden}
            editie={productData.editie}
          />
        </AccordionPanel>
        <AccordionItem
          toggle="inhoud-gevorderden"
          itemClass="inline-block focus:outline-none font-lexend font-semibold text-base xs:text-lg text-navy-light1 my-3"
          iconClass="mt-1 ml-5 h-5 w-5 text-navy-light1 stroke-1 stroke-current"
        >
          Gevorderden bundel
        </AccordionItem>
        <AccordionPanel
          id="inhoud-gevorderden"
          panelClass="overflow-hidden md:overflow-x-hidden transition-height ease duration-300"
        >
          <Inhoudsopgave
            inhoud={productData.inhoud.gevorderden}
            editie={productData.editie}
          />
        </AccordionPanel>
      </Accordion>
    </div>
  );
}

export default SubSectionInhoudsopgaveNiveaus;
