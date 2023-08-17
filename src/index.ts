import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    name: "Orange pants",
    description: "Modern Orange pants",
    price: "130.0",
  },
  {
    name: "Black pants",
    description: "Social Black pants",
    price: "125.0",
  },
  {
    name: "Red pants",
    description: "Confy Red pants",
    price: "150.0",
  },
  {
    name: "Blue T-Shirt",
    description: "Confy Blue T-Shirt",
    price: "40.0",
  },
];

const categories = [
  {
    name: "Clothing",
  },
  {
    name: "Female",
  },
  {
    name: "Male",
  },
  {
    name: "Kids",
  },
];

const typeDefs = `#graphql
    type Category {
      name: String
    }

    type Product {
      name: String
      description: String
      price: String
    }

    type Query {
      products: [Product],
      categories: [Category]
    }
`;

const resolvers = {
  Query: {
    products: () => products,
    categories: () => categories
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