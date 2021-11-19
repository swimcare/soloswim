function MultiColorBg() {
  return (
    <div className="bg-soloswim-orange grid sm:grid-cols-10 grid-cols-6 md:w-125 sm:w-140 w-200 h-full absolute transform lg:-translate-x-44 sm:-translate-x-32 -translate-x-44">
      <div className="bg-soloswim-orange skew-x-20"></div>
      <div className="bg-soloswim-yellow skew-x-20 transform -translate-x-1"></div>
      <div className="bg-soloswim-green skew-x-20 transform -translate-x-2"></div>
      <div className="bg-soloswim-purple skew-x-20 transform -translate-x-3"></div>
      <div className="bg-soloswim-blue skew-x-20 transform -translate-x-4"></div>
      <div className="bg-soloswim-pink skew-x-20 transform -translate-x-5"></div>
      <div className="hidden sm:block bg-soloswim-orange skew-x-20 transform -translate-x-6"></div>
      <div className="hidden sm:block bg-soloswim-yellow skew-x-20 transform -translate-x-7"></div>
      <div className="hidden sm:block bg-soloswim-green skew-x-20 transform -translate-x-8"></div>
      <div className="hidden sm:block bg-soloswim-purple skew-x-20 transform -translate-x-9"></div>
    </div>
  );
}

export default MultiColorBg;
