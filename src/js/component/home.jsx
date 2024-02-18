import React from "react";
import NavBar from "./navbar";
import Jumbotron from "./jumbotron";
import CardsSection from "./cardsSection";
import Footer from "./footer";
// imprting pictures
import armorImage from "../../img/armaduras.png";
import weaponImage from "../../img/armas.png";
import potionsImage from "../../img/pociones.png";
import accessoriesImage from "../../img/accesorios.png";

const armorCard = {
  imgUrl: armorImage,
  imgAlt: "armor store",
  cardTitle: "Armor Store",
  cardText:
    "Discover elegance and protection in our armor store: where style meets defense.",
  buttonLabel: "Buy now!",
};
const weaponCard = {
  imgUrl: weaponImage,
  imgAlt: "weapon store",
  cardTitle: "Weapon Store",
  cardText:
    "Explore our weapon store: where power and precision combine to offer you the best equipment.",
  buttonLabel: "Buy now!",
};
const potionsCard = {
  imgUrl: potionsImage,
  imgAlt: "potion store",
  cardTitle: "Potion Store",
  cardText:
    "Step into our potion store, where magic and mystery intertwine to offer you the perfect elixir.",
  buttonLabel: "Buy now!",
};
const accessoriesCard = {
  imgUrl: accessoriesImage,
  imgAlt: "accessories store",
  cardTitle: "Accessory Store",
  cardText:
    "Explore our accessories store, where elegance and functionality come together.",
  buttonLabel: "Buy now!",
};

const Home = () => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <Jumbotron />
        <section className="cards-section-container">
          <CardsSection {...weaponCard} />
          <CardsSection {...armorCard} />
          <CardsSection {...potionsCard} />
          <CardsSection {...accessoriesCard} />
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
