//react objects
import Head from "next/head";
import Image from "next/image";
//props
import ContactForm from "@components/ContactForm";
import { LinkButton } from "@components/buttons";
import Carousel from "@components/carousel";


 
export default function Home() {
  const images = [
    {
      src: "/autumn-sour.jpg",
      alt: "",
      height: 500,
      width: 500
    },
    {
      src: "/drink1.jpg",
      alt: "",
      height: 500,
      width: 500
    }
  ]
  return (
    <>
      <Head>
        <title>In The Mix Bartending</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="grow">
          {/*main image*/}
          <Image />
          <div className="object-none object-center">
            <p>
            </p>
            <LinkButton className="object-none object-bottom"/>
          </div>
        </div>
        <div className="align-items-center container max-w-4xl">
            <h2 className="text-center p-3">ABOUT US</h2>
          <div className="container">
            <div className="container grid md:grid-cols-2">
                <div className="container order-first basis-1/2 p-3">
                  <Image src="/cocktail-menu.jpg"
                    height={300}
                    width={500}
                  />
                </div>
                <div className="container oder-last  basis-1/2 p-3">
                  <h3>Cocktails with Experience</h3>
                  <p>
                    In The Mix was founded by Robyn Sutherland. She began her journey in the service industry in 2008 at a small local breakfast restaurant in Toronto, Daddy'os. In 2021, she decided to transition her skills from restaurants to events. Robyn would like to bring her passion for mixology to your wedding, your home, your backyard, or wherever you are or whatever event you're hosting. In The Mix will be there to ensure it runs smoothly.
                  </p>
                </div>
            </div>
            <div className="container grid md:grid-cols-2">
              <div className="container md:order-first order-last basis-1/2 p-3">
                <h3>Bar Services for Your Event</h3>
                <p>
                 In The Mix offers a range of services including:
                </p>
                <li>Hosted bar service</li>
                <li>Cash, ticket, or open bar service</li>
                <li>Specially Crafted Cocktail menu</li>
                <li>Bar setup and clean up</li>
                <p>
                  Please contact us for further details about your event so we may tailor our services accordingly. 
                </p>
              </div>
              <div className="container md:order-last order-first basis-1/2 p-3">
                <Image src="/group-drinks.jpg"
                  height={300}
                  width={500}
                />
              </div>
            </div>
            <div className="container grid md:grid-cols-2">
              <div className="container order-first basis-1/2 p-3">
                <Image src="/fireside.jpg"
                  height={300}
                  width={500}
                />
              </div>
              <div className="container order-last basis-1/2 p-3">
                <h3>Event Extras and Add-ons</h3>
                <p>
                  We provide all of the non-alcoholic beverages, mixes, glassware, curated seasonal non-alcoholic/alcoholic cocktail menu, and bar for an additional charge. Please contact us for details.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-row">
            {/*Cocktails*/}
            <Carousel images={images}/>
          </div>
          <div className="flex flex-row">
            {/*Reviews*/}
          </div>
          <div className="flex flex-row">
            {/*Contact*/}
            <div className="container grid md:grid-cols-2">
            <div className="md:basis-1/2 p-3">
              <p className="description">
                Here's an example of a Netlify Form! When you fill this out, the
                submissions can be found in the Netlify Admin site.
              </p>
            </div>
            <div className="md:basis-1/4 p-3">
              <ContactForm />
            </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
