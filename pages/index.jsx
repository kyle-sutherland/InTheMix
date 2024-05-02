import Image from "next/image";
import ContactForm from "/components/ContactForm";
import Carousel from "/components/carousel";
import Link from "next/link";
import Landing from "/components/landing";
import Layout from "/pages/layout";
import atumnSourImg from "/public/autumn-sour.jpg";
import drink1Img from "/public/drink1.jpg";
import drink2Img from "/public/drink2.jpg";
import drink3Img from "/public/drink3.jpg";
import drink4Img from "/public/drink4.jpg";
import drink5Img from "/public/drink5.jpg";
import groupDrinksImg from "/public/group-drinks.jpg";
import firsideImg from "/public/fireside.jpg";
import cocktailMenuImg from "/public/cocktail-menu.jpg";
import { Fade } from "react-awesome-reveal";
import { allura } from "../lib/fonts.js";

export default function Home() {
  const cocktailCarouselImages = [
    {
      src: atumnSourImg,
      alt: "",
      height: 500,
      width: 500,
      title: "Autumn Sour",
      desc: "A thoughtfully crafted sour made with apple cider to kick off the harvest season. Ask about our curated cocktail menus.",
      id: 1,
    },
    {
      src: drink2Img,
      alt: "",
      height: 500,
      width: 500,
      title: "Red Rita",
      desc: "This well-balanced mix of sweet and cozy spices, with a hint of tartness from the cranberry juice. This cocktail is a flavorful and enjoyable option for any occasion.",
      id: 2,
    },
    {
      src: drink3Img,
      alt: "",
      height: 500,
      width: 500,
      title: "Slamma Jamma",
      desc: "It’s a perfect balance of tropical sweetness and spiced complexity, offering a refreshing and adventurous flavor profile. Enjoy a mini  vacation in a glass with every sip.",
      id: 3,
    },
    {
      src: drink4Img,
      alt: "",
      height: 500,
      width: 500,
      title: "Fall Embrace",
      desc: "The fall embrace is perfect for those cool evenings, with warm  flavours of chai, cinnamon, and nutmeg.",
      id: 4,
    },
    {
      src: drink5Img,
      alt: "",
      height: 500,
      width: 500,
      title: "Summer Heat",
      desc: "This is a light and citrusy cocktail with a spicy kick that perfectly captures the essence of summer.",
      id: 5,
    },
    {
      src: drink1Img,
      alt: "",
      height: 500,
      width: 500,
      title: "",
      desc: "",
      id: 6,
    },
    // {
    //   src: "",
    //   alt: "",
    //   height: 500,
    //   width: 500,
    //   title: "",
    //   desc: "",
    //   id: 7,
    // },
  ];
  return (
    <>
      <Layout>
        <Fade triggerOnce="true">
          <Landing />
        </Fade>
        <div className="body-content ">
          <div className="flex flex-col mx-auto container xl:max-w-7xl">
            <Fade cascade duration={1200} damping={0.1} fraction={0.1}>
              <div id="about">
                <h2>ABOUT US</h2>
                <div className="container">
                  <div className="container grid md:grid-cols-2">
                    <div className="about-image order-first basis-1/2 py-3 ps-3">
                      <Image
                        src={cocktailMenuImg}
                        sizes="100vw"
                        width={500}
                        height={300}
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                        alt=""
                      />
                    </div>
                    <div className="container oder-last text-center basis-1/2 p-3">
                      <h3>Cocktails with Experience</h3>
                      <p>
                        In The Mix was founded by Robyn Sutherland. She began
                        her journey in the service industry in 2008 at a small
                        local breakfast restaurant in Toronto, Daddyo&#39;s. In
                        2021, she decided to transition her skills from
                        restaurants to events. Robyn would like to bring her
                        passion for mixology to your wedding, your home, your
                        backyard, or wherever you are or whatever event
                        you&#39;re hosting. In The Mix will be there to ensure
                        it runs smoothly.
                      </p>
                    </div>
                  </div>
                  <div className="container grid md:grid-cols-2">
                    <div className="container md:order-first text-center order-last basis-1/2 p-3">
                      <h3>Bar Services for Your Event</h3>
                      <p>In The Mix offers a range of services including:</p>
                      <li>Hosted bar service</li>
                      <li>Cash, ticket, or open bar service</li>
                      <li>Specially Crafted Cocktail menu</li>
                      <li>Bar setup and clean up</li>
                      <p>
                        Please contact us for further details about your event
                        so we may tailor our services accordingly.
                      </p>
                    </div>
                    <div className="about-image md:order-last order-first basis-1/2 p-3">
                      <Image
                        src={groupDrinksImg}
                        height={300}
                        width={500}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="container grid md:grid-cols-2">
                    <div className="about-image order-first basis-1/2 p-3">
                      <Image src={firsideImg} height={300} width={500} alt="" />
                    </div>
                    <div className="container order-last basis-1/2 text-center p-3">
                      <h3>Event Extras and Add-ons</h3>
                      <p>
                        We provide all of the non-alcoholic beverages, mixes,
                        glassware, curated seasonal non-alcoholic/alcoholic
                        cocktail menu, and bar for an additional charge. Please
                        contact us for details.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div id="cocktails" className="flex flex-col">
                <div className="container cocktails">
                  <h4 className={allura.className}>
                    <Link href="/cocktails-page">Signature Cocktails</Link>
                  </h4>
                  {/* Cocktails-list */}
                  <Carousel images={cocktailCarouselImages} />
                </div>
                <h5 className={allura.className}>
                  <Link href="/cocktails-page">Full List {">>"}</Link>
                </h5>
              </div>
              <div id="contact" className="flex flex-col container">
                <h2>CONTACT US</h2>
                {/* Contact */}
                <div className="container grid md:grid-cols-2">
                  <div className="md:basis-1/2 p-3">
                    <p className="description">
                      Send me a message about your upcoming event. Do you need
                      help with permits? Can we design a customized menu for
                      you? Let me know, and I will get back to you soon.
                    </p>
                    <h1>In The Mix</h1>
                    <p>
                      <Link href="#contact">587-893-2204</Link>
                    </p>
                    <p>
                      <Link href="#contact">inthemixcalgary@gmail.com</Link>
                    </p>
                  </div>
                  <div className="md:order-first md:basis-1/2 p-3">
                    <ContactForm />
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </Layout>
    </>
  );
}
