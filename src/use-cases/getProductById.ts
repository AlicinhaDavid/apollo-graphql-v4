import { products } from "../datasets/products";

export const getProductById = (id: string) => {
  products.find((product) => {
    return product.id === id;
  });
};
