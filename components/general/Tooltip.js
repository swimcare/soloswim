const positions = {
    top: 'bottom-full',
    bottom: 'top-full',
  };

function Tooltip({textClassname, className, iconClassName, position, title, content }) {
  return (
    <div className={`${textClassname} group cursor-pointer relative text-center overflow-visible`}>
      {title}
      <div
        className={`${positions[position]} ${
          className
        } opacity-0 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 left-1/2 transform -translate-x-1/2 px-3 pointer-events-none`}
      >
        {content}
        <svg
          className={`${iconClassName} absolute h-2 w-full left-0 top-full`}
          x="0px"
          y="0px"
          viewBox="0 0 255 255"
          xmlSpace="preserve"
        >
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
        </svg>
      </div>
    </div>
  );
}

export default Tooltip;
