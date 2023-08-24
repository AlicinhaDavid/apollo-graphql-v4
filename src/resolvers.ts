import { categories, pictures, products } from "./dataset";

export const resolvers = {
  Query: {
    products: () => products,
    productsByDescription: (root, args, context, info) =>
      products.filter((product) => {
        return product.description.includes(args.productDescription);
      }),
    productsByCategory: (root, args, context, info) =>
      products.filter((product) => {
        return product.categories.find((category) => {
          return category.name === args.categoryName;
        });
      }),
    productById: (root, args, context, info) =>
      products.find((product) => {
        return product.id === args.productId;
      }),
    categories: () => categories,
    pictures: () => pictures,
  },
};
