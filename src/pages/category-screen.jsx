import { Component } from "react";
import styled from "styled-components";
import Product from "../molecules/product";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";

const CategoryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  row-gap: 103px;
  column-gap: 40px;
`;

class CategoryPage extends Component {
  render() {
    const { products } = this.props;
    return (
      <ScreenLayout heading="Category name" size={42} pt={103} pb={191}>
        <CategoryStyle>
          {products.map((item) => (
            <Product
              key={`item_key_${item.id}`}
              img={item.img}
              price={item.price}
              title={item.title}
              inStock={item.inStock}
            />
          ))}
        </CategoryStyle>
      </ScreenLayout>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps)(CategoryPage);
