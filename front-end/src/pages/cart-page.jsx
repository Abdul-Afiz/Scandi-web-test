import { Component } from "react";
import styled from "styled-components";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";

import { Text } from "../styles/style-guide";

import Button from "../atoms/button";
import { addToCart, removeFromCart } from "../reducers/cart-items-reducer";
import CartItems from "../molecules/cart-page-item";
import { priceFilter } from "../util/helper-function";

const CartWrapper = styled.div`
  height: 100%;
  overflow: hidden;
  margin: 55px 0;
  &,
  .cart-items {
    display: flex;
    flex-direction: column;
    overflow: auto;
  }

  .total {
    height: 50%;
    display: grid;
    grid-template-columns: 279px 1fr;
    padding-top: 32px;
    border-top: 1px solid #e5e5e5;

    .amount {
      display: grid;
      grid-template-columns: 0.7fr 1fr;
      align-items: center;
      margin-bottom: 8px;
    }
  }
`;

class CartPage extends Component {
  render() {
    const { cartItems, currency } = this.props;

    return (
      <ScreenLayout
        mb={55}
        heading="CART"
        size={32}
        fw="strong"
        navigate={this.props.history}
        overflow="hidden"
      >
        <CartWrapper>
          <div className="cart-items">
            {cartItems.map((item, i) => (
              <CartItems
                key={item.id}
                cartItem={item}
                blackborder={i === 0 && true}
              />
            ))}
          </div>

          <div className="total">
            <div className="total-1">
              <div className="amount">
                <Text size={24} lh={28}>
                  Tax 21%:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  {currency}
                  {(
                    (21 / 100) *
                    cartItems.reduce((a, b) => {
                      return a + priceFilter(b, currency) * b.quantity;
                    }, 0)
                  ).toFixed(2)}
                </Text>
              </div>
              <div className="amount">
                <Text size={24} lh={28}>
                  Quantity:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  {cartItems.length !== 0
                    ? cartItems.reduce((a, b) => a + b.quantity, 0)
                    : 0}
                </Text>
              </div>
              <div className="amount">
                <Text size={24} lh={28} fw="medium">
                  Total:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  {currency}{" "}
                  {cartItems.length !== 0
                    ? cartItems
                        .reduce((a, b) => {
                          return a + priceFilter(b, currency) * b.quantity;
                        }, 0)
                        .toFixed(2)
                    : 0}
                </Text>
              </div>
              <Button title="order" />
            </div>
          </div>
        </CartWrapper>
      </ScreenLayout>
    );
  }
}

const mapStateToProps = ({ cartItems, currency }) => {
  return {
    cartItems,
    currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOption: (item) => dispatch(addToCart(item)),
    removeOption: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
