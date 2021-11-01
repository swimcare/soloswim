import { useSelector } from "react-redux";
import { selectItems } from "../../slices/basketSlice";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <div className="bg-white h-16 w-full drop-shadow-md">
      <div className="flex flex-row justify-between max-w-7xl mx-auto h-full items-center">
        <div className="">Logo</div>
        <div>
          <ul className="flex flex-row space-x-10">
            <li>Zwemschema's</li>
            <li>Over Soloswim</li>
            <li>Contact</li>
            <li onClick={() => router.push("/winkelwagen")}>
              Winkelwagen ({items.length})
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
