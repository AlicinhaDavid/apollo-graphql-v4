import { categories } from "./datasets/categories";
import { pictures } from "./datasets/pictures";
import { getProducts } from "./use-cases/getProducts";
import { getProductsByDescription } from "./use-cases/getProductsByDescription";
import { getProductsByCategory } from "./use-cases/getProductsByCategory";
import { getProductById } from "./use-cases/getProductById";

const getCategories = () =>{
  return categories
}

const getPictures = () =>{
  return pictures
}

export const resolvers = {
  Query: {
    products: getProducts(),
    productsByDescription: (root, args, context, info) =>
      getProductsByDescription(args.productDescription),
    productsByCategory: (root, args, context, info) => getProductsByCategory(args.categoryName),
    productById: (root, args, context, info) => getProductById(args.productId),
    categories: getCategories(),
    pictures: getPictures(),
  },
};
