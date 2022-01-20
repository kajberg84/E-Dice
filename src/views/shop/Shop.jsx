import { ProductsWrapper } from "../../components/productswrapper/ProductsWrapper";
import { Hero } from "../../components/hero/Hero";

// styles
import styles from "./Shop.module.css";

export const Shop = () => {
  return (
    <>
      <Hero title="A store of dices">
        <p>
          All our dice sets contain one of each of these types of dice: d4, d6,
          d8, d10, d12, d20 and a d10 procentile dice.
        </p>
        <p>
          You can use them for roleplaying games like Dungeons and Dragons,
          Pathfinder, Call of Cthulhu, Coriolis and many more.
        </p>
      </Hero>
      <ProductsWrapper />
    </>
  );
};
