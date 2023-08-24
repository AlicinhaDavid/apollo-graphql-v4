import { products } from "../datasets/products";

export const getProductsByDescription = (description: string) => {
  return products.filter((product) => {
    return product.description.includes(description);
  });
};
