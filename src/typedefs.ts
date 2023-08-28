export const typeDefs = `#graphql
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

  input CategoryProductContent {
    name: String
  }
  input PictureProductContent{
    source: String
  }
  
  input ProductContent {
    name: String
    description: String
    price: String
    categories: [CategoryProductContent]
    picture: PictureProductContent
    color: Color
  }

  type Mutation {
    createProduct(product: ProductContent): Product
  }

`;
