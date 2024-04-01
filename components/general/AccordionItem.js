import React from "react";
import { Context } from "../../components/hooks/Accordion";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/solid";

const useAccordion = () => React.useContext(Context);


function AccordionItem({ toggle, children, itemClass, iconClass }) {
  const [selected, toggleItem] = useAccordion();
  return (
    <div role="button" onClick={toggleItem(toggle)} className={itemClass}>
      {children}
      <span className="float-right">
        {selected === toggle ? (
          <ChevronUpIcon className={iconClass} />
        ) : (
          <ChevronDownIcon className={iconClass} />
        )}
      </span>
    </div>
  );
}

export default AccordionItem;
