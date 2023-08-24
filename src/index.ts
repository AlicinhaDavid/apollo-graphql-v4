import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { products,categories,pictures } from "./dataset";

const typeDefs = `#graphql
  enum Color {
    ORANGE
    BLACK
    RED
    BLUE
  }

  type Picture {
    source: String
    product: Product
  }

  type Category {
    name: String
    products: [Product]
  }

  type Product {
    id: String
    name: String
    description: String
    price: String
    categories: [Category]
    picture: Picture
    color: Color
  }

  type Query {
    products: [Product]
    productsByDescription(productDescription: String): [Product]
    productsByCategory(categoryName: String): [Product]
    productById(productId: String): Product,
    categories: [Category]
    pictures: [Picture]
  }
`;

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
