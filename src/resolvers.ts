import { products } from "./datasets/products";
import { categories } from "./datasets/categories";
import { pictures } from "./datasets/pictures";

const getProducts = () =>{
  return products
}

const getProductsByDescription = (description: string) => {
  return products.filter((product) => {
    return product.description.includes(description);
  });
};

const getProductsByCategory = (categoryName: string) => {
  return products.filter((product) => {
    return product.categories.find((category) => {
      return category.name === categoryName;
    });
  });
};

const getProductById = (id: string) => {
  products.find((product) => {
    return product.id === id;
  });
};

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
