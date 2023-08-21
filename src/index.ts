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
    color: "ORANGE",
  },
  {
    name: "Orange Wool Sweater",
    description: "Confy Orange Wool Sweater",
    price: "100.0",
    categories: [{ name: "Clothing" }, { name: "Female" }],
    picture: {
      source:
        "https://unsplash.com/pt-br/fotografias/SdR2wW-v4PE?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText",
    },
    color: "ORANGE",
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
    color: "BLACK",
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
    color: "RED",
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
    color: "BLUE",
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
