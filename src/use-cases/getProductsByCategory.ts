import { products } from "../datasets/products";

export const getProductsByCategory = (categoryName: string) => {
  return products.filter((product) => {
    return product.categories.find((category) => {
      return category.name === categoryName;
    });
  });
};
