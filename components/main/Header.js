import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <div className="w-full flex flex-row justify-end">
      <div className="text-white text-xs cursor-pointer bg-blue-700 rounded-full p-2 px-4">
        <div onClick={() => router.push("/winkelwagen")}>
          <p className="hidden md:inline font-bold md:text-sm">
            Winkelwagen ({items.length})
          </p>
        </div>
      </div>
    </div>
  );
}

export default Header;
