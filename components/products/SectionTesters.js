import MultiColorBg from "../home/MultiColorBg";

function SectionTesters({ color, isCombi }) {
  

  return (
    <section
      className={`${
        color &&
        !isCombi &&
        color !== "multicolor" &&
        color !== "green-orange-yellow"
          ? "bg-soloswim-" + color
          : "bg-soloswim-orange"
      } relative overflow-x-hidden`}
    >
      {color === "multicolor" && <MultiColorBg />}
      {color === "green-orange-yellow" && (
        <div className="grid lg:grid-cols-10 grid-cols-6 md:w-125 sm:w-140 w-200 h-full absolute lg:-translate-x-44 sm:-translate-x-32 -translate-x-44">
          <div className="bg-soloswim-orange skew-x-20"></div>
          <div className="bg-soloswim-yellow skew-x-20 transform -translate-x-1"></div>
          <div className="bg-soloswim-green skew-x-20 transform -translate-x-2"></div>
          <div className="bg-soloswim-orange skew-x-20 transform -translate-x-3"></div>
          <div className="bg-soloswim-yellow skew-x-20 transform -translate-x-4"></div>
          <div className="bg-soloswim-green skew-x-20 transform -translate-x-5"></div>
          <div className="hidden lg:block bg-soloswim-orange skew-x-20 transform -translate-x-6"></div>
          <div className="hidden lg:block bg-soloswim-yellow skew-x-20 transform -translate-x-7"></div>
          <div className="hidden lg:block bg-soloswim-green skew-x-20 transform -translate-x-8"></div>
          <div className="hidden lg:block bg-soloswim-orange skew-x-20 transform -translate-x-9"></div>
        </div>
      )}

      <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-20 lg:py-32 relative">
        <div className="bg-white rounded-2xl py-8 text-center">
          <div className="px-5 font-lexend font-extrabold text-3xl lg:text-5xl tracking-wide">
            <h3 className="text-main lg:my-4">
            Getest door zwemmers van alle niveau’s
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTesters;
