import { Component } from "react";
import styled from "styled-components";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";

import { Text } from "../styles/style-guide";

import Button from "../atoms/button";
import { addToCart, removeFromCart } from "../reducers/cart-items-reducer";
import CartItems from "../molecules/cart-page-item";

const CartWrapper = styled.div`
  margin: 55px 0;
  .items {
    display: grid;
    grid-template-columns: 276px 1fr;
    padding-top: 24px;
    padding-bottom: 22px;
    border-top: 1px solid #e5e5e5;
  }

  .item-details {
    display: flex;

    .item-detail {
      display: flex;
      width: 100%;
      flex-direction: column;
      row-gap: 8px;
    }

    .size {
      display: flex;
      justify-content: flex-start;
      column-gap: 8px;
      margin-bottom: 16px;
    }
    .color {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      column-gap: 8px;
    }
  }

  .item-calcs {
    display: flex;
    justify-content: flex-end;
    max-width: 100%;

    .item-calc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 24px;
    }

    .item-img {
      display: flex;

      width: 200px;
      & > img {
        height: 100%;
        width: 100%;
        object-fit: cover;
      }
    }
  }
  .total {
    display: grid;
    grid-template-columns: 279px 1fr;
    padding-top: 3zxZ 2px;
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
  constructor(props) {
    super(props);
    this.state = {
      imgIndex: 0,
      product: {
        id: "",
        selectedOption: {},
        quantity: 0,
      },
    };
    // const { cartItems } = this.props;
    // this.items = cartItems;
    // console.log(this.items);
  }

  //   componentDidMount() {
  //     this.setState(this.items);
  //     // setTimeout(() => {
  //     // }, 1000);
  //   }

  render() {
    const { cartItems, currency } = this.props;
    console.log(cartItems);
    return (
      <ScreenLayout mb={55} heading="CART" size={32} fw="strong">
        <CartWrapper>
          {cartItems.map((item) => (
            <CartItems key={item.id} cartItem={item} />
          ))}
          {/* {cartItems.map((cartItem) => (
            <div className="items" key={`item_keys_${cartItem.title}`}>
              <div className="item-details">
                <div className="item-detail">
                  <div className="item-title">
                    <Text fw="bold" size={30} lh={27} mb={16}>
                      {splitTitle(cartItem.name).head}
                    </Text>
                    <Text size={30} lh={27}>
                      {splitTitle(cartItem.name).tail}
                    </Text>
                  </div>

                  <Text mt={20} mb={20} fw="strong" size={24} lh={24}>
                    {currency}
                    {priceFilter(cartItem, currency)}
                  </Text>
                  {cartItem.category === "tech"
                    ? cartItem.attributes.map(({ items, type, name }) => {
                        if (type === "swatch") {
                          return (
                            <div key={name}>
                              <Text size={14} lh={16}>
                                {name}:
                              </Text>
                              <div className="size">
                                {items.map((item) => (
                                  <ColorBox
                                    onClick={() =>
                                      this.addNewOption(name, item)
                                    }
                                    key={item.id}
                                    selected={findOption(cartItem).includes(
                                      item.value
                                    )}
                                    color={item.value}
                                    size="32px"
                                  />
                                ))}
                              </div>
                            </div>
                          );
                        }
                        return (
                          <div key={name}>
                            <Text size={18} lh={18} fw="strong">
                              {name}:
                            </Text>
                            <div className="size">
                              {items.map((item) => (
                                <SizeBox
                                  onClick={() => this.addNewOption(name, item)}
                                  key={item.value}
                                  selected={findOption(cartItem).includes(
                                    item.value
                                  )}
                                  value={item.value}
                                  pt={12}
                                  pb={12}
                                  pr={28}
                                  pl={28}
                                  fs="16px"
                                  w="30%"
                                />
                              ))}
                            </div>
                          </div>
                        );
                      })
                    : cartItem.category === "clothes"
                    ? cartItem.attributes.map(({ items, name }) => {
                        return (
                          <div key={name}>
                            <Text size={18} lh={18}>
                              {name}:
                            </Text>
                            <div className="size">
                              {items.map((item) => {
                                console.log({ item });
                                return (
                                  <SizeBox
                                    key={item.value}
                                    selected={findOption(cartItem).includes(
                                      item.value
                                    )}
                                    value={item.value}
                                    onClick={() =>
                                      this.addNewOption(name, item)
                                    }
                                    pt={12}
                                    pb={12}
                                    pr={28}
                                    pl={28}
                                    fs="16px"
                                  />
                                );
                              })}
                            </div>
                          </div>
                        );
                      })
                    : ""}
                </div>
              </div>

              <div className="item-calcs">
                <div className="item-calc">
                  <AddIcon />
                  <Text size={24} fw="medium" lh={38.4}>
                    {cartItem.quantity}
                  </Text>
                  <RemoveIcon />
                </div>
                <div className="item-img">
                  <img src={cartItem.gallery[0]} alt={cartItem.name} />
                </div>
              </div>
            </div>
          ))} */}
          <div className="total">
            <div className="total-1">
              <div className="amount">
                <Text size={24} lh={28}>
                  Tax 21%:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  $42.00
                </Text>
              </div>
              <div className="amount">
                <Text size={24} lh={28}>
                  Quantity:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  3
                </Text>
              </div>
              <div className="amount">
                <Text size={24} lh={28} fw="medium">
                  Total:
                </Text>
                <Text fw="strong" size={24} lh={28}>
                  $200.00
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

export default connect(mapStateToProps)(CartPage);
