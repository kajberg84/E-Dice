class Product {
    constructor(id, title, description, price, img) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.price = price;
      this.img = img;
    }
  }
  
  const product1 = new Product(
    1,
    'Klocka',
    'En fin klocka',
    1000,
    '/images/product_raspberryliquorice_dice.jpg'
  );
  const product2 = new Product(
    2,
    'Cykel',
    'En riktigt nice cykel',
    5000,
    '/images/product_green_dice.jpg'
  );
  const product3 = new Product(
    3,
    'Solgalsögon',
    'Riktigt schyssta solbrillor',
    500,
    '/images/product_bubblegum_dice.jpg'
  );
  const product4 = new Product(
    4,
    'Skor',
    'Riktigt feta dojor',
    1000,
    '/images/product_rainbow_dice.jpg'
  );
  
  export const products = [product1, product2, product3, product4, product1, product2, product3, product4];
  