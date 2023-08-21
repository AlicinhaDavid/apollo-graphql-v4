# apollo-graphql-v4

![catalog's context](src/assets/Catalog.png)

## Available queries in this project:

### Products queries
#### products
```graphql
query ExampleQuery {
  products {
    name
    description
    price
    picture {
      source
    }
    categories {
      name
    }
    color
  }
}
```
#### productsByDescription
```graphql


```
### Categories queries

```graphql
query ExampleQuery {
  categories {
    name
    products {
      name      
    }
  }
}
```
### Pictures queries
```graphql
query ExampleQuery {
  pictures {
    source
    product {
      name
    }
  }
}
```




