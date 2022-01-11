import { ProductsWrapper } from '../../components/productswrapper/ProductsWrapper';
import { Hero } from '../../components/hero/Hero';

// styles
import styles from './Shop.module.css';

export const Shop = () => {
  return (
    <>
      <Hero title="A store of dices">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit consequatur dolor amet quae asperiores consectetur error quibusdam inventore recusandae?
      </Hero>
      <ProductsWrapper />
    </>
  );
};
