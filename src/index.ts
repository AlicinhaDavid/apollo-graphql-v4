import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    name: "Orange pants",
    description: "Modern Orange pants",
    price: "130.0",
    categories: [{ name: "Clothing" }, { name: "Female" }],
  },
  {
    name: "Black pants",
    description: "Social Black pants",
    price: "125.0",
    categories: [{ name: "Clothing" }, { name: "Male" }],
  },
  {
    name: "Red pants",
    description: "Confy Red pants",
    price: "150.0",
    categories: [{ name: "Clothing" }, { name: "Female" }],
  },
  {
    name: "Blue T-Shirt",
    description: "Confy Blue T-Shirt",
    price: "40.0",
    categories: [{ name: "Clothing" }, { name: "Male" }, { name: "Kids" }],
  },
];

const categories = [
  {
    name: "Clothing",
    products: [
      {
        name: "Orange pants",
      },
      {
        name: "Black pants",
      },
      {
        name: "Red pants",
      },
      {
        name: "Blue T-Shirt",
      },
    ],
  },
  {
    name: "Female",
    products: [
      {
        name: "Orange pants",
      },
      {
        name: "Red pants",
      },
    ],
  },
  {
    name: "Male",
    products: [
      {
        name: "Black pants",
      },
      {
        name: "Blue T-Shirt",
      },
    ],
  },
  {
    name: "Kids",
    products: [
      {
        name: "Blue T-Shirt",
      },
    ],
  },
];

const typeDefs = `#graphql
    type Category {
      name: String
      products: [Product]
    }

    type Product {
      name: String
      description: String
      price: String
      categories: [Category]
    }

    type Query {
      products: [Product],
      categories: [Category]
    }
`;

const resolvers = {
  Query: {
    products: () => products,
    categories: () => categories,
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
