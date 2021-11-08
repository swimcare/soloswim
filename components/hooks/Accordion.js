import React from "react";

  //accordion logic
  export const Context = React.createContext({});

  export function Accordion({ children, defaultPanel }) {
    const [selected, setSelected] = React.useState(defaultPanel || "");

    const toggleItem = React.useCallback(
      (id) => () => {
        setSelected((prevState) => (prevState !== id ? id : ""));
      },
      []
    );

    const values = React.useMemo(
      () => [selected, toggleItem],
      [selected, toggleItem]
    );
    return <Context.Provider value={values}>{children}</Context.Provider>;
  }