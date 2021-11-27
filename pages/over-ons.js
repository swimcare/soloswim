import IconCard from "../components/home/IconCard";
import Image from "next/image";
import Link from "next/link";

function overOns() {
  return (
    <main>
      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto py-12 lg:py-32">
          <div>
            <h1 className="text-navy-light1 font-lexend font-extrabold text-3xl">
              Over Soloswim
            </h1>
            <p className="text-navy-light1 font-lexend font-bold md:font-extrabold text-lg my-1 italic">
              Kenmerkend voor een Soloswimmer: …. Zwemt zelfstandig zijn
              zwemtraining met een leuke kleurtjes bundel op de rand….
            </p>
          </div>
          <div className="my-5">
            <h2 className="text-main font-lexend font-extrabold text-2xl">
              Onze missie
            </h2>
            <div className="flex flex-col gap-10 my-12">
              <IconCard
                title="Het zwemmen leuker maken"
                img="/images/home/no-app-needed.png"
                color="bg-grey-light4"
              />
              <IconCard
                title="Iets aanbieden voor mensen die niet bij een club willen zwemmen"
                img="/images/home/no-app-needed.png"
                color="bg-grey-light4"
              />
              <IconCard
                title="Onze kennis delen"
                img="/images/home/no-app-needed.png"
                color="bg-grey-light4"
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="my-5 mx-auto lg:mx-0 lg:mr-10 flex flex-col lg:flex-row max-w-4xl lg:max-w-7xl 2xl:max-w-7xl">
          <div className="lg:hidden mx-5 leading-none text-zero">
            <Image
              className="rounded-t-xl lg:rounded-none"
              src="/images/home/oprichters-soloswim.png"
              width={996}
              height={772}
              alt="Oprichters soloswim"
            />
          </div>
          <div className="hidden lg:flex relative leading-none flex-none items-stretch w-5/12 xl:w-7/12">
            <Image
              className="rounded-t-xl sm:rounded-none"
              src="/images/home/oprichters-soloswim.png"
              layout="fill"
              objectFit="cover"
              alt="Oprichters soloswim"
            />
          </div>
          <div className="bg-grey-light4  mx-5 lg:mx-0 shadow-custom3 rounded-b-xl lg:rounded-b-none lg:rounded-r-xl p-6 sm:px-7 lg:p-9 flex flex-col gap-2">
            <div>
              <h3 className="text-main font-lexend font-bold lg:font-extrabold text-2xl">
                Ons verhaal
              </h3>
            </div>
            <div className="text-base leading-relaxed text-navy-light1 my-1 lg:leading-normal">
              <p>
                Zwommen eerst bij clubs, nu kan dat niet echt meer (te oud). Dus
                gingen we zelf zwemmen en maakten we onze eigen trainingen op
                papier. Ons probleem → na 1 keer gebruik vergingen onze
                trainingen en dat vonden we zonde. Daarnaast hadden we het idee
                om een database van trainingen te maken zodat we ze niet elkaar
                hoefde te bedenken. Plus daarnaast merkten we dat veel mensen
                ons vroegen wat we aan het doen waren of waar we voor zwommen
                (door het papiertje) en dat ze dat een goed idee vonden of leuk
                vonden omdat ze zelf maar wat deden. Toen ging er een lampje
                branden en bedachten we de waterproof zwemtraining. We zijn
                gelijk aan de slag gegaan (hele terug reis van de mont Ventoux
                naar Nederland het idee uitgewerkt) en zoveel maanden later
                rolde de site/product uit.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="px-5">
        <div className="transform -translate-y-10 translate-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="78.09"
            height="79.136"
            viewBox="0 0 78.09 79.136"
          >
            <path
              id="Arrow-right_3"
              d="M58.4,59.955a113.373,113.373,0,0,1-18.3,3.111q-5.719.266-11.446.009A2,2,0,0,1,26.7,61.589a1.818,1.818,0,0,1,1.172-2.059,29.794,29.794,0,0,1,5.484-.383,76.945,76.945,0,0,0,14.7-1.312C44.868,56.9,41.739,55.8,38.617,54.7c-7.948-2.813-15.808-6.217-22.265-11.365A49.027,49.027,0,0,1,1.7,21.544,43.316,43.316,0,0,1,.683,1.882,1.933,1.933,0,0,1,1.988.146,2.276,2.276,0,0,1,4.263.536C5.275,1.407,4.7,2.7,4.64,3.8a50.654,50.654,0,0,0-.294,8.633,42.153,42.153,0,0,0,13.307,26.3c7.792,6.987,18.119,10.63,28.8,14.2,2.3.79,4.635,1.479,6.946,2.237a7.5,7.5,0,0,1,1.289.454C49.1,50.461,42.856,45.9,37.725,40.336a1.923,1.923,0,0,1-.245-2.584,2.4,2.4,0,0,1,2.728-.764c3.226,2.472,6.215,6.289,10.027,8.991,3.616,2.932,7.07,6.033,10.386,9.243C62.592,57.434,61.335,59.526,58.4,59.955Z"
              transform="matrix(0.951, 0.309, -0.309, 0.951, 19.53, 0)"
              fill="#143f5f"
            />
          </svg>
        </div>
      </div>

      <section>
        <div className="px-5 sm:px-8 max-w-screen-xl mx-auto -mt-5 lg:py-32">
          <div>
            <h2 className="text-main font-lexend font-extrabold text-3xl">
              Het ontstaan van Soloswim
            </h2>
            <h3 className="font-lexend font-bold text-2xl text-navy-light1 my-2">Een droom</h3>
          </div>
        </div>
      </section>
    </main>
  );
}

export default overOns;
