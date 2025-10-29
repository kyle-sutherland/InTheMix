import Layout from "/pages/layout";
import Image from "next/image";
import Link from "next/link";
import allura from "../lib/fonts.js";

export default function CocktailsPage() {
  const cocktails = require("/data/signature-cocktails.json");
  return (
    <Layout>
      <div className="body-content">
        <div className="flex flex-col mx-auto container">
          <div className="container cocktails-banner">
            <Image
              src="/In-The-Mix(teal).svg"
              height={1000}
              width={1400}
              alt="In The Mix teal logo"
            />
          </div>
            <div className="cocktails-h1 px-6">
              <t>Signature Cocktails</t>
            </div>
            <div className="cocktails-list">
              {cocktails.map((liquor, j) => (
                <div obj={liquor} key={j}>
                  <div className="cocktails-h2">
                    <t>{liquor.liquor} Cocktails</t>
                  </div>
                    {liquor.cocktails.map((cocktail, i) => (
                      <div
                        obj={cocktail}
                        key={i}
                        className="grid grid-flow-row sm:grid-cols-3"
                      >
                        <div className="sm:col-span-2">
                          <br />
                          <div className="cocktails-name">
                            <p>{cocktail.name}</p>
                          </div>
                          <div className="cocktails-description">
                            <p>{cocktail.description}</p>
                          </div>
                          <div className="cocktails-ingredients">
                            <p>{cocktail.ingredients.join(", ")}</p>
                          </div>
                        </div>
                        <div className="w-2/3 cocktails-icon">
                          <Image
                            src={cocktail.image}
                            height={500}
                            width={500}
                            alt="An icon representing the suggested glass"
                          />
                        </div>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          <div className="cocktails-h2 self-center bottom-0 pt-8">
            <t>
              <Link href="/#cocktails">{"<<"} Back</Link>
            </t>
          </div>
        </div>
      </div>
    </Layout>
  );
}
