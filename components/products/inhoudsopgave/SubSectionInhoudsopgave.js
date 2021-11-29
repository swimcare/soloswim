import { Fragment } from "react";
import AccordionItem from "../../general/AccordionItem";
import AccordionPanel from "../../general/AccordionPanel";
import { Accordion } from "../../hooks/Accordion";
import Inhoudsopgave from "./Inhoudsopgave";

function SubSectionInhoudsopgave({ productData }) {
  return (
    <div className="my-12 md:my-10">
      <div className="md:hidden my-4 border-b-3 border-grey-warm border-opacity-25">
        <h2 className="my-1 text-main text-2xl font-lexend font-extrabold">
          Inhoudsopgave
        </h2>
      </div>

      {productData.niveaus ? (
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
                  inhoud={productData.inhoud.beginners.techniek}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.beginners.kracht}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.beginners.duur}
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
            {!productData.isCombi ? (
              <Inhoudsopgave
                inhoud={productData.inhoud.semigevorderden}
                editie={productData.editie}
              />
            ) : (
              <Fragment>
                <Inhoudsopgave
                  inhoud={productData.inhoud.semigevorderden.techniek}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.semigevorderden.kracht}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.semigevorderden.duur}
                  editie={productData.editie}
                />
              </Fragment>
            )}
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
            {!productData.isCombi ? (
              <Inhoudsopgave
                inhoud={productData.inhoud.gevorderden}
                editie={productData.editie}
              />
            ) : (
              <Fragment>
                <Inhoudsopgave
                  inhoud={productData.inhoud.gevorderden.techniek}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.gevorderden.kracht}
                  editie={productData.editie}
                />
                <Inhoudsopgave
                  inhoud={productData.inhoud.gevorderden.duur}
                  editie={productData.editie}
                />
              </Fragment>
            )}
          </AccordionPanel>
        </Accordion>
      ) : (
        <Inhoudsopgave inhoud={productData.inhoud.beginners} />
      )}
    </div>
  );
}

export default SubSectionInhoudsopgave;
