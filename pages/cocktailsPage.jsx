import Image from "next/image";
import Link from "next/link";
import Layout from "pages/layout"

export default function cocktailsPage() {
  const cocktails = [
    {
      name: "Atumn Sour",
      image: "/atumn-sour.jpg",
      symbol: "",
      text: "A thoughtfully crafted sour made with apple cider to kick off the harvest season. Ask about our curated cocktail menus.",
    },
    {
      name: "Red Rita",
      image: "/drink2.jpg",
      symbol: "",
      text: "This well-balanced mix of sweet and cozy spices, with a hint of tartness from the cranberry juice. This cocktail is a flavorful and enjoyable option for any occasion.",
    },
    {
      name: "Slamma Jamma",
      image: "/drink3.jpg",
      symbol: "",
      text: "It’s a perfect balance of tropical sweetness and spiced complexity, offering a refreshing and adventurous flavor profile. Enjoy a mini  vacation in a glass with every sip.",
    },
    {
      name: "Fall Embrace",
      image: "/drink5.jpg",
      symbol: "",
      text: "The fall embrace is perfect for those cool evenings, with warm  flavours of chai, cinnamon, and nutmeg.",
    },
    {
      name: "Summer Heat",
      image: "/drink4.jpg",
      symbol: "",
      text: "This is a light and citrusy cocktail with a spicy kick that perfectly captures the essence of summer.",
    },
    {
      name: "Summer Heat",
      image: "/drink1.jpg",
      symbol: "",
      text: "This is a light and citrusy cocktail with a spicy kick that perfectly captures the essence of summer.",
    },
  ]
  return (
    <Layout>
      {cocktails.map((cocktail, key) => {
        return (
          <>
            {key = cocktail.name}
            <div className="text-black">
              {cocktail.name}
              {console.log(cocktail.name)}
            </div>
            <div className="text-black">
              {cocktail.text}
            </div>
          </>
        )
      })}
    </Layout>
  );
}
