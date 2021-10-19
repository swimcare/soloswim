import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1 className="text-7xl">Hoofdpagina</h1>
      <Link href="/products">
        Producten
      </Link>
    </Fragment>
  );
}
