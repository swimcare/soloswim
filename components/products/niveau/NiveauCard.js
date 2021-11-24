import { CheckIcon } from "@heroicons/react/solid";

function NiveauCard({title, text1, text2, text3, text4}) {
  return (
    <div className="bg-grey-light4 rounded-lg max-w-lg mx-auto">
      <h3 className="text-navy-light1 font-bold lg:font-extrabold font-lexend lg:text-2xl text-center py-3 lg:py-5">
        {title}
      </h3>
      <div className="px-3 pb-3 text-tiny">
        {/* item */}
        <div className="flex flex-row gap-4 py-2 text-tiny text-navy-light1 leading-6">
          <CheckIcon className="flex-none h-6 w-6 text-main stroke-1 stroke-current" />
          <p>{text1}</p>
        </div>
        {/* item */}
        <div className="flex flex-row gap-4 py-2 text-tiny text-navy-light1 leading-6">
          <CheckIcon className="flex-none h-6 w-6 text-main stroke-1 stroke-current" />
          <p>{text2}</p>
        </div>
        {/* item */}
        <div className="flex flex-row gap-4 py-2 text-tiny text-navy-light1 leading-6">
          <CheckIcon className="flex-none h-6 w-6 text-main stroke-1 stroke-current" />
          <p>{text3}</p>
        </div>
        {/* item */}
        <div className="flex flex-row gap-4 py-2 text-tiny text-navy-light1 leading-6">
          <CheckIcon className="flex-none h-6 w-6 text-main stroke-1 stroke-current" />
          <p>{text4}</p>
        </div>
      </div>
    </div>
  );
}

export default NiveauCard;
