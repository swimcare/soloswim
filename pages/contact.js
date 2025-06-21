import { MailIcon } from "@heroicons/react/solid";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { useState, useRef, Fragment } from "react";
import * as ga from "../lib/ga/index";

function contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [onderwerp, setOnderwerp] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  const myFormRef = useRef(null);

  const router = useRouter();

  // Google analytics event
  const contactGA = (data) => {
    ga.event({
      action: "contact_form",
      params: {
        name: data.name,
        email: data.email,
        tel: data.tel,
        onderwerp: data.onderwerp,
        message: data.message,
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,
      tel,
      onderwerp,
      message,
    };
    contactGA(data);
    fetch("/api/contact", {
      method: "post",
      body: JSON.stringify(data),
    })
      .then((res) => {
        clearForm();
        if (res.status == "200") {
          router.push("/bericht-verzonden");
        } else {
          console.log(res);
          setError(true);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const clearForm = () => {
    myFormRef.current.reset();
  };

  return (
    <Fragment>
    <NextSeo
        title="SoloSwim | Contact"
        description="Neem contact op met Soloswim. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering"
        additionalLinkTags={[
          {
            rel: "icon",
            href: "/images/favicons/favicon.ico",
          },
          {
            rel: "apple-touch-icon",
            href: "/images/favicons/apple-touch-icon.png",
          },
        ]}
        openGraph={{
          type: "website",
          url: "https://www.soloswim.be",
          title: "SoloSwim | Waterproof zwemschema's",
          description: "Neem contact op met SoloSwim. ✓ Borstcrawl zwemschema's ✓ Techniek-, kracht- en duurtrainingen ✓ Alle niveau's ✓ Snelle levering",
          locale: "nl_BE",
          site_name: "SoloSwim | Contact",
          images: [
            {
              url: "/images/home/header-OG.jpg",
              width: 1200,
              height: 630,
              alt: "SoloSwim",
            },
          ],
        }}
      />
    <main>
      <section className="bg-grey-light4">
        <div className="px-5 sm:px-8 mx-auto max-w-3xl py-20 lg:py-32 text-center">
          <h1 className="text-main text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lexend font-extrabold">
            Neem contact op
          </h1>
          <p className="text-navy-light1 text-tiny my-5">
            Wil je graag meer informatie, heb je vragen of ideeën? Je kunt ons
            bereiken via onderstaand contactformulier of per mail!
          </p>
          <div className="inline-block hover:underline">
            <a href="mailto:info@soloswim.be" className="text-tiny">
              <MailIcon className="h-5 w-5 text-main float-left mr-2 mt-[2px]" />
              info@soloswim.be
            </a>
          </div>
          <form ref={myFormRef} onSubmit={handleSubmit}>
            <div className="grid lg:grid-cols-2 gap-2 lg:gap-10 my-10 max-w-xl mx-auto">
              <input
                className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
                id="name"
                type="text"
                placeholder="Naam*"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
                id="email"
                type="email"
                placeholder="Email*"
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
                id="tel"
                type="tel"
                placeholder="Telefoonnummer"
                onChange={(e) => setTel(e.target.value)}
              />
              <input
                className="rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
                id="onderwerp"
                type="text"
                placeholder="Onderwerp*"
                onChange={(e) => setOnderwerp(e.target.value)}
                required
              />
              <textarea
                className="col-span-full rounded-sm p-2 px-4 placeholder-charcoal placeholder-opacity-90 shadow-sm outline-none"
                id="message"
                type="text"
                placeholder="Type hier je bericht..."
                rows="12"
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <div className="max-w-xl mx-auto">
              <button
                type="submit"
                className="text-white text-tiny lg:text-lg font-bold uppercase px-10 py-3 rounded-full bg-main tracking-wider shadow-xl hover:bg-transparent hover:text-main border-4 border-main"
              >
                Verstuur
              </button>
              {error && (
                <p className="my-5 text-red-600">
                  Oeps, er gaat iets mis! Neem anders even contact op via mail:{" "}
                  <a
                    href="mailto:info@soloswim.be"
                    className="hover:underline text-charcoal"
                  >
                    info@soloswim.be
                  </a>
                </p>
              )}
              <p className="mt-5">*Verplichte velden</p>
            </div>
          </form>
        </div>
      </section>
    </main></Fragment>
  );
}

export default contact;
