import { EyeIcon } from "@heroicons/react/outline";

function ZwemschemaInhoud(props) {
  return (
    <div className="flex flex-row gap-4 py-2">
      <div className="flex-none w-3 md:w-5">
        <p className="font-semibold text-sm">{props.number}</p>
      </div>
      <div className="flex-grow text-sm md:border-b-2 md:mb-2">
        <p className="font-semibold mb-1">
          {props.name}
          <span className="hidden md:inline-block ml-2 font-normal">{props.tags}</span>
          {props.preview ? (
            <span className="text-xs font-normal text-main float-right translate-y-0.5">
              Preview
              <span className="float-left mr-1">
                <EyeIcon className="h-4 w-4 text-main" />
              </span>
              <span className="ml-4 text-xs translate-y-0.5 float-right text-navy-light1">
                {props.distance} m
              </span>
            </span>
          ) : (
            <span className="font-normal ml-4 text-xs translate-y-0.5 float-right text-navy-light1">
              {props.distance} m
            </span>
          )}
        </p>
        <p className="text-xs md:hidden">[snelheid]</p>
      </div>
    </div>
  );
}

export default ZwemschemaInhoud;
