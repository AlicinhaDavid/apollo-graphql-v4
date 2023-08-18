import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

const products = [
  {
    name: "Orange pants",
    description: "Modern Orange pants",
    price: "130.0",
    categories: [{ name: "Clothing" }, { name: "Female" }],
    picture: {
      source:
        "https://unsplash.com/pt-br/fotografias/SdR2wW-v4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    color: { label: "orange" },
  },
  {
    name: "Black pants",
    description: "Social Black pants",
    price: "125.0",
    categories: [{ name: "Clothing" }, { name: "Male" }],
    picture: {
      source:
        "https://unsplash.com/pt-br/fotografias/ylHcWlrMlzs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    color: { label: "black" },
  },
  {
    name: "Red pants",
    description: "Confy Red pants",
    price: "150.0",
    categories: [{ name: "Clothing" }, { name: "Female" }],
    picture: {
      source:
        "https://unsplash.com/pt-br/fotografias/3we24FcjVAk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    color: { label: "red" },
  },
  {
    name: "Blue T-Shirt",
    description: "Confy Blue T-Shirt",
    price: "40.0",
    categories: [{ name: "Clothing" }, { name: "Male" }, { name: "Kids" }],
    picture: {
      source:
        "https://unsplash.com/pt-br/fotografias/BN760VSO8yM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    color: { label: "blue" },
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

const pictures = [
  {
    source:
      "https://unsplash.com/pt-br/fotografias/SdR2wW-v4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    product: {
      name: "Orange pants",
    },
  },
  {
    source:
      "https://unsplash.com/pt-br/fotografias/ylHcWlrMlzs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    product: {
      name: "Black pants",
    },
  },
  {
    source:
      "https://unsplash.com/pt-br/fotografias/3we24FcjVAk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    product: {
      name: "Red pants",
    },
  },
  {
    source:
      "https://unsplash.com/pt-br/fotografias/BN760VSO8yM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    product: {
      name: "Blue T-Shirt",
    },
  },
];

const colors = [
  {
    label: "orange",
    produtos: [{ name: "Orange pants" }],
  },
  {
    label: "black",
    produtos: [{ name: "Black pants" }],
  },
  {
    label: "red",
    produtos: [{ name: "Red pants" }],
  },
  {
    label: "blue",
    produtos: [{ name: "Blue T-Shirt" }],
  },
];

const typeDefs = `#graphql
  type Color {
    label: String
    produtos: [Product]
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
    name: String
    description: String
    price: String
    categories: [Category]
    picture: Picture
    color: Color
  }

  type Query {
    products: [Product]
    categories: [Category]
    pictures: [Picture]
    colors: [Color]
  }
`;

const resolvers = {
  Query: {
    products: () => products,
    categories: () => categories,
    pictures: () => pictures,
    colors: () => colors,
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
