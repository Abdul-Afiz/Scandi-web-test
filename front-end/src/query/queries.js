import { gql } from "apollo-boost";

export const productQuery = gql`
  query ($category: CategoryInput) {
    category(input: $category) {
      name
      products {
        id
        name
        inStock
        category
        brand
        description
        gallery
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        attributes {
          id
          name
          type
          items {
            displayValue
            value
            id
          }
        }
      }
    }
  }
`;

export const currencyQuery = gql`
  query {
    currencies {
      label
      symbol
    }
  }
`;

export const singleProductQuery = gql`
  query ($productId: String!) {
    product(id: $productId) {
      id
      name
      inStock
      category
      brand
      description
      gallery
      prices {
        currency {
          label
          symbol
        }
        amount
      }
      attributes {
        id
        name
        type
        items {
          displayValue
          value
          id
        }
      }
    }
  }
`;
