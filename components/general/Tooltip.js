const position = {
    top: 'bottom-full',
    bottom: 'top-full',
  };

function Tooltip(props) {
  return (
    <div className={`${props.textClassname} group cursor-pointer relative w-28 text-center`}>
      {props.title}
      <div
        className={`${position[props.position]} ${
          props.className
        } opacity-0 text-white text-center text-xs rounded-lg py-2 absolute z-10 group-hover:opacity-100 -left-1/2 ml-14 px-3 pointer-events-none`}
      >
        {props.children}
        <svg
          className={`${props.iconClassName} absolute h-2 w-full left-0 top-full`}
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
