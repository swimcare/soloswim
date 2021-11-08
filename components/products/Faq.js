import AccordionItem from "../general/AccordionItem";
import AccordionPanel from "../general/AccordionPanel";
import { Accordion } from "../hooks/Accordion";

function Faq() {
  return (
    <section className="bg-main lg:bg-white pb-12 lg:pb-20">
      <div className="px-8 max-w-screen-xl mx-auto py-5">
        <div className="lg:bg-main lg:rounded-2xl lg:p-10">
          <div className="text-white border-b border-opacity-40 pt-2 lg:pt-0 pb-6">
            <h3 className="w-40 font-lexend text-2xl font-extrabold lg:w-full lg:text-4xl">
              Veelgestelde vragen
            </h3>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <div>
              <Accordion defaultPanel="faq1">
                <AccordionItem
                  toggle="faq1"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit a, conset d sadipscing elitr Lorem ipsum
                  dolor sit a, conset d sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq1"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq2"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq2"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq3"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq3"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
              </Accordion>
            </div>
            <div>
              <Accordion>
                <AccordionItem
                  toggle="faq4"
                  itemClass="flex flex-row justify-between align-start inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit a, conset d sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq4"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq5"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq5"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
                <AccordionItem
                  toggle="faq6"
                  itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
                  iconClass="ml-3 h-8 w-8 text-white -translate-y-1"
                >
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr?
                </AccordionItem>
                <AccordionPanel
                  id="faq6"
                  panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
                >
                  <p className="mb-3">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum.
                  </p>
                </AccordionPanel>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Faq;
