import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { products, categories, pictures } from "./dataset";
import { typeDefs } from "./typedefs";

const resolvers = {
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});

console.log(`🚀  Server ready at: ${url}`);
