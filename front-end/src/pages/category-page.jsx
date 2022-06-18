import { Component } from "react";
import styled from "styled-components";
import ProductCard from "../molecules/product-card";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";
import AddtoCaretIcon from "../vectors/add-to-caret-svg";

import { Query } from "react-apollo";
import { getProducts } from "../reducers/products-reducer";

import { productQuery } from "../query/queries";

const CategoryStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(386px, 1fr));
  row-gap: 103px;
  column-gap: 40px;
  .card {
    &:hover {
      box-shadow: 0px 4px 35px 0px #a8acb030;

      .show {
        display: block;
      }
    }
    position: relative;
    .add-item {
      display: none;
      position: absolute;
      right: 30px;
      bottom: 60px;
    }
  }
`;

class CategoryPage extends Component {
  handleAddItemToCart = (item) => {
    this.props.addToCart(item);
  };
  navigateToProductDescriptionPage = (id) => {
    this.props.history.push(`/product/${id}`);
  };
  render() {
    const { products, currency, navlinks, fetchProduct } = this.props;

    return (
      <Query query={productQuery} variables={{ category: { title: navlinks } }}>
        {({ data, loading }) => {
          if (loading) {
            return <h1>Loading........</h1>;
          }
          setTimeout(() => {
            fetchProduct(data.category.products);
          });

          return (
            <ScreenLayout
              heading={data.category.name.toUpperCase()}
              size={42}
              pt={79}
              pb={191}
            >
              <CategoryStyle>
                {products.map((item) => (
                  <div className="card" key={`item_key_${item.id}`}>
                    <ProductCard
                      key={`item_key_${item.id}`}
                      img={item.gallery[0]}
                      price={
                        item.prices.filter(
                          (price) => price.currency.symbol === currency
                        )[0]
                      }
                      title={item.name}
                      inStock={item.inStock}
                    />
                    <div className={`${item.inStock && "show"} add-item`}>
                      <AddtoCaretIcon
                        onClick={() =>
                          this.navigateToProductDescriptionPage(item.id)
                        }
                      />
                    </div>
                  </div>
                ))}
              </CategoryStyle>
            </ScreenLayout>
          );
        }}
      </Query>
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

const mapStateToProps = ({ products, navlinks, currency }) => {
  return {
    products,
    navlinks,
    currency,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
