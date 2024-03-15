import Link from "next/link";
import CartModal from "./CartModal";
import { useRouter } from "next/router";

type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};

export default function Page({ searchParams }: SearchParamProps) {
  const router = useRouter();
  const show = searchParams?.show;
  console.log(show);

  // Function to append query parameter to the current URL
  const appendQueryParameter = () => {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("show", "true");
    router.push(currentUrl.pathname + currentUrl.search);
  };

  return (
    <>
      <button onClick={appendQueryParameter}>Show</button>

      {show && <CartModal />}
    </>
  );
}
