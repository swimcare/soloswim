import React from "react";
import { Context } from "../../components/hooks/Accordion";

const useAccordion = () => React.useContext(Context);

function AccordionPanel({ children, id, panelClass }) {
    const [selected] = useAccordion();
    const ref = React.useRef();
    const inlineStyle =
      selected === id ? { height: ref.current?.scrollHeight } : { height: 0 };

    return (
      <div ref={ref} id={id} className={panelClass} style={inlineStyle}>
        {children}
      </div>
    );
  }

export default AccordionPanel;
