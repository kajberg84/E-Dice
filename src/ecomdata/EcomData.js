class Product {
  constructor(id, title, description, material, price, img) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.material = material;
    this.price = price;
    this.img = img;
  }
}

const product1 = new Product(
  1,
  "Raspberry Liquorice",
  "Set of seven dice for role playing. These delicious looking dice are not edible.",
  "Resin",
  19,
  "/images/product_raspberryliquorice_dice.jpg"
);
const product2 = new Product(
  2,
  "Green Swirl",
  "Set of seven dice for role playing. Roll for poison damage.",
  "Resin",
  29,
  "/images/product_green_dice.jpg"
);
const product3 = new Product(
  3,
  "Bubblegum",
  "Set of seven dice for role playing. For the bubbly player.",
  "Metal",
  39,
  "/images/product_bubblegum_dice.jpg"
);
const product4 = new Product(
  4,
  "Rainbow",
  "Set of seven dice for role playing. These colorful dice lets you roll with pride!",
  "Resin",
  29,
  "/images/product_rainbow_dice.jpg"
);

export const products = [product1, product2, product3, product4];

