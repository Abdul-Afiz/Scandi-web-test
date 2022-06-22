import { Query, Field } from "@tilework/opus";

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

const SINGLE_PRODUCT = (id) =>
  new Query("product")
    .addArgument("id", "String!", id)
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
    );

export {
  CURRENCY_QUERY,
  ALL_CATEGORY_QUERY,
  SINGLE_CATEGORY_QUERY,
  SINGLE_PRODUCT,
};
