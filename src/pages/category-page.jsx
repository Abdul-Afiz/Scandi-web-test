import { Component } from "react";
import styled from "styled-components";
import ProductCard from "../molecules/product-card";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";
import AddtoCaretIcon from "../vectors/add-to-caret-svg";
import { addToCart } from "../reducers/cart-items-reducer";

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
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  handleAddItemToCart = (item) => {
    this.props.addToCart(item);
  };
  navigateToProductDescriptionPage = (id) => {
    this.props.history.push(`/product/${id}`);
  };
  render() {
    const { products } = this.props;
    return (
      <ScreenLayout heading="Category name" size={42} pt={79} pb={191}>
        <CategoryStyle>
          {products.map((item) => (
            <div className="card" key={`item_key_${item.id}`}>
              <ProductCard
                key={`item_key_${item.id}`}
                img={item.img}
                price={item.price}
                title={item.title}
                inStock={item.inStock}
                onClick={() => this.navigateToProductDescriptionPage(item.id)}
              />
              <div className={`${item.inStock && "show"} add-item`}>
                <AddtoCaretIcon
                  onClick={() => this.handleAddItemToCart(item)}
                />
              </div>
            </div>
          ))}
        </CategoryStyle>
      </ScreenLayout>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
  };
};

const mapStateToProps = (state) => {
  console.log({ state });
  return {
    products: state.products,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryPage);
