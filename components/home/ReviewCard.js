import { StarIcon } from "@heroicons/react/solid";
import { useEffect, useRef, useState } from "react";
import lodash from "lodash";

function ReviewCard({ text, title, name }) {
  const [clamped, setClamped] = useState(true);
  const [showButton, setShowButton] = useState(true);

  const handleClick = () => setClamped(!clamped);

  const containerRef = useRef(null);

  useEffect(() => {
    const hasClamping = (el) => {
      const { clientHeight, scrollHeight } = el;
      return clientHeight !== scrollHeight;
    };

    const checkButtonAvailability = () => {
      if (containerRef.current) {
        // Save current state to reapply later if necessary.
        const hadClampClass = containerRef.current.classList.contains("clamp");
        // Make sure that CSS clamping is applied if aplicable.
        if (!hadClampClass) containerRef.current.classList.add("clamp");
        // Check for clamping and show or hide button accordingly.
        setShowButton(hasClamping(containerRef.current));
        // Sync clamping with local state.
        if (!hadClampClass) containerRef.current.classList.remove("clamp");
      }
    };

    const debouncedCheck = lodash.debounce(checkButtonAvailability, 50);

    checkButtonAvailability();
    window.addEventListener("resize", debouncedCheck);

    return () => {
      window.removeEventListener("resize", debouncedCheck);
    };
  }, [containerRef]);

  return (
    <div className="mx-10 md:mx-0 h-full md:h-auto md:w-1/3">
      <div className="bg-white rounded-2xl shadow-custom3 p-5 lg:p-3 lg:px-7 text-left h-full">
        <div className="flex flex-col gap-1 my-4">
          <h3 className="text-lg text-main font-bold">{title}</h3>
          <div className="flex flex-row transform -translate-x-1 mb-3 mt-1">
            <StarIcon className="h-6 w-6 text-gold-dark1" />
            <StarIcon className="h-6 w-6 text-gold-dark1" />
            <StarIcon className="h-6 w-6 text-gold-dark1" />
            <StarIcon className="h-6 w-6 text-gold-dark1" />
            <StarIcon className="h-6 w-6 text-gold-dark1" />
          </div>
          <div>
            <p
              ref={containerRef}
              className={`leading-7 ${clamped && "line-clamp-5 clamp"}`}
            >
              {text}
            </p>
            {showButton && (
              <button type="button" className="underline text-main" onClick={handleClick}>Lees {clamped ? "meer" : "minder"}</button>
            )}
          </div>

          <h4 className="text-main font-bold mt-4">{name}</h4>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
