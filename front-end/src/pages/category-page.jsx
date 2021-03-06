import { Component } from "react";
import styled from "styled-components";
import ProductCard from "../molecules/product-card";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";

import { getProducts } from "../reducers/products-reducer";
import Server from "../query/client";

import { SINGLE_CATEGORY_QUERY } from "../query/queries";

const CategoryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  row-gap: 103px;
  column-gap: 40px;
`;

class CategoryPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
    };
  }
  async componentDidMount() {
    const id = this.props.match.params.id
      ? this.props.match.params.id
      : this.props.link;
    try {
      const { category } = await Server.post(SINGLE_CATEGORY_QUERY(id));
      this.props.fetchProduct(category.products);
    } catch (error) {
      console.error(error.message);
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.id !== this.props.link) {
      const {
        category: { products },
      } = await Server.post(SINGLE_CATEGORY_QUERY(this.props.link));
      this.props.fetchProduct(products);
    }
  }
  render() {
    const { products } = this.props;

    return (
      <ScreenLayout
        size={42}
        pt={79}
        pb={191}
        navigate={this.props.history}
        navId={this.props.match.params.id}
      >
        <CategoryStyle>
          {products.map((item) => (
            <ProductCard
              key={`item_key_${item.id}`}
              item={item}
              onClick={(e) => {
                if (
                  e.target.tagName === "circle" ||
                  e.target.tagName === "svg" ||
                  e.target.tagName === "path"
                )
                  return null;
                this.props.history.push(`/product/${item.id}`);
              }}
            />
          ))}
        </CategoryStyle>
      </ScreenLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProduct: (products) => {
      dispatch(getProducts(products));
    },
  };
};

const mapStateToProps = ({ products, navlinks: { link, links } }) => {
  return {
    products,
    link,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
