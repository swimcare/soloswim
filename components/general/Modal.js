import { useEffect, useRef } from "react";
import Portal from '@reach/portal';


function Modal({ children, isOpen, toggle }) {
  const ref = useRef();

  // close modal on click outside
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!ref.current?.contains(event.target)) {
        if (!isOpen) return;
        toggle(false);
      }
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, [isOpen, ref, toggle]);

  // close modal when you click on "ESC" key
  useEffect(() => {
    const handleEscape = (event) => {
      if (!isOpen) return;
      if (event.key === "Escape") {
        toggle(false);
      }
    };
    document.addEventListener("keyup", handleEscape);
    return () => document.removeEventListener("keyup", handleEscape);
  }, [isOpen, toggle]);

  // hide scrollbar and prevent body from moving when modal is open
  //put focus on modal dialogue
  useEffect(() => {
    if (!isOpen) return;

    ref.current?.focus();

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <Portal>
      {isOpen && (
        <>
          <div className="fixed top-0 left-0 z-30 w-screen h-screen bg-black opacity-50" />
          <div className="fixed top-0 overflow-y-auto mx-auto inset-x-0 z-40 w-full h-full m-0 max-w-4xl">
            <div
              aria-modal={true}
              className="mt-12 mx-8 pb-6 md:m-auto md:w-8/12 lg:w-8/12 md:pt-12 focus:outline-none"
              ref={ref}
              role="dialogue"
              tabIndex={-1}
            >
              <div className="animate-modal relative flex flex-col bg-white pointer-events-auto">{children}</div>
            </div>
          </div>
        </>
      )}
    </Portal>
  );
}

export default Modal;
