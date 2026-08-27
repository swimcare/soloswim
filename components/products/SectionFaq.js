import AccordionItem from "../general/AccordionItem";
import AccordionPanel from "../general/AccordionPanel";
import { Accordion } from "../hooks/Accordion";
import { FAQ_ITEMS } from "../../data/faq";

function SectionFaq() {
  const left = FAQ_ITEMS.slice(0, 7);
  const right = FAQ_ITEMS.slice(7);

  const renderColumn = (items) =>
    items.map((item) => (
      <div key={item.id}>
        <AccordionItem
          toggle={item.id}
          itemClass="flex flex-row justify-between inline-block focus:outline-none font-lexend font-bold text-tiny text-white my-3"
          iconClass="ml-3 h-8 w-8 text-white transform -translate-y-1"
        >
          {item.question}
        </AccordionItem>
        <AccordionPanel
          id={item.id}
          panelClass="border-b border-opacity-40 overflow-hidden lg:pr-10 text-white text-opacity-90 md:overflow-x-hidden transition-height ease duration-300"
        >
          <p className="mb-3 text-tiny">{item.answer}</p>
        </AccordionPanel>
      </div>
    ));

  return (
    <section
      id="faq"
      className="bg-main lg:bg-white pt-5 lg:pt-10 pb-12 lg:pb-32"
    >
      <div className="px-8 max-w-screen-xl mx-auto py-5">
        <div className="lg:bg-main lg:rounded-2xl lg:p-10">
          <div className="text-white border-b border-opacity-40 pt-2 lg:pt-0 pb-6">
            <h2 className="w-40 font-lexend text-2xl font-extrabold lg:w-full lg:text-4xl">
              Veelgestelde vragen
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-10">
            <Accordion defaultPanel="faq1">
              <div className="lg:flex-1">{renderColumn(left)}</div>
              <div className="lg:flex-1">{renderColumn(right)}</div>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionFaq;
