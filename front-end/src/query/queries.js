import { Query, Field } from "@tilework/opus";
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

const queryFields = {
  currency: "label,symbol".split(","),
  product: "id,name,inStock,gallery,description,category,brand".split(","),
  productAttributes: "id,name,type".split(","),
  attributeItems: "id,displayValue,value".split(","),
};

const CURRENCY_QUERY = new Query("currencies", true).addFieldList(
  queryFields.currency
);

const ALL_CATEGORY_QUERY = new Query("categories", true).addFieldList(["name"]);

const SINGLE_CATEGORY_QUERY = (title) =>
  new Query("category")
    .addArgument("input", "CategoryInput", { title })
    .addFieldList(["name"])
    .addField(
      new Field("products", true)
        .addFieldList(queryFields.product)
        .addField(
          new Field("prices")
            .addFieldList(["amount"])
            .addField(new Field("currency").addFieldList(queryFields.currency))
        )
        .addField(
          new Field("attributes")
            .addFieldList(queryFields.productAttributes)
            .addField(
              new Field("items", true).addFieldList(queryFields.attributeItems)
            )
        )
    );

export { CURRENCY_QUERY, ALL_CATEGORY_QUERY, SINGLE_CATEGORY_QUERY };
