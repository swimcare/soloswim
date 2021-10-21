import Image from "next/image";
import { Fragment } from "react";

function WinkelwagenItem(props) {
  return (
    <Fragment>
      <li key={props.i}>
        <Image src={props.images[0]} width={400} height={400} />
        <h2>{props.title}</h2>
        <h2>{props.price} euro</h2>
      </li>
    </Fragment>
  );
}

export default WinkelwagenItem;
