import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-7xl mb-10 bg-gray-50">Hoofdpagina</h1>
      <Link href="/zwemschemas" passHref>
        <a className="underline">Zwemschema's</a>
      </Link>
    </Fragment>
  );
}
