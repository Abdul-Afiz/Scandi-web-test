import { Component } from "react";
import styled from "styled-components";
import Product from "../molecules/product";
import ScreenLayout from "../organism/screen-layout";

const CategoryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  column-gap: 40px;
`;

const store = [
  {
    id: 1,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
  {
    id: 2,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
  {
    id: 3,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
  {
    id: 4,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
  {
    id: 5,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
  {
    id: 6,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
  },
];

class CategoryPage extends Component {
  render() {
    return (
      <ScreenLayout heading="Category name" size={42}>
        <CategoryStyle>
          {store.map((item) => (
            <Product
              mt={103}
              key={`item_key_${item.id}`}
              img={item.img}
              price={item.price}
              title={item.title}
            />
          ))}
        </CategoryStyle>
      </ScreenLayout>
    );
  }
}

export default CategoryPage;
