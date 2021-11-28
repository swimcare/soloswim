import { MailIcon } from "@heroicons/react/solid";
import Link from "next/link";

function contact() {
  return (
    <main>
      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 mx-auto max-w-3xl py-20 lg:py-32 text-center">
          <h1 className="text-main text-2xl font-lexend font-extrabold">
            Neem contact op
          </h1>
          <p className="text-navy-light1 text-tiny my-5">
            Wil je graag meer informatie, heb je vragen of ideeën? Je kunt ons
            bereiken via onderstaand contactformulier of per mail!
          </p>
          <div className="inline-block hover:underline">
            <a href="mailto:info@soloswim.nl" className="text-tiny">
              <MailIcon className="h-5 w-5 text-main float-left mr-2 mt-[2px]" />
              info@soloswim.nl
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default contact;
