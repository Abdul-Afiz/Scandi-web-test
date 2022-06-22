import { Component } from "react";
import styled from "styled-components";
import ColorBox from "../atoms/color-box";
import SizeBox from "../atoms/size-box";
import { Text } from "../styles/style-guide";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";
import {
  priceFilter,
  setCartMiniDefaultAtrributes,
  findOption,
} from "../util/helper-function";
import { connect } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItemFromCart,
} from "../reducers/cart-items-reducer";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 4px;
  margin: 32px 0;
  .item-details,
  .item-detail {
    display: flex;

    .item-detail {
      width: 100%;
      flex-direction: column;
      row-gap: 8px;
    }
    .size {
      display: flex;
      justify-content: flex-start;
      column-gap: 8px;
      margin-top: 8px;
    }
    .color {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      column-gap: 8px;
      margin-top: 8px;
    }
  }

  .item-calcs {
    display: flex;
    max-width: 100%;

    .item-calc {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-right: 8px;
    }

    .item-img {
      display: flex;
      max-width: 121px;
      & > img {
        max-width: 100%;
        object-fit: contain;
      }
    }
  }
`;

class CartItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      selectedOption: {},
      quantity: 0,
    };
  }

  addNewOption(id, attr) {
    this.setState(({ selectedOption }) => ({
      selectedOption: {
        ...selectedOption,
        [id]: attr,
      },
    }));
  }

  componentDidMount() {
    this.setState(() => ({
      id: this.props.cartItem.id,
      selectedOption: setCartMiniDefaultAtrributes(this.props.cartItem),
      quantity: this.props.cartItem.quantity,
    }));
  }

  render() {
    const { cartItem, currency } = this.props;

    return (
      <ItemsWrapper>
        <div className="item-details">
          <div className="item-detail">
            <div className="item-title">
              <Text fw="thin">{cartItem.brand}</Text>
              <Text fw="thin">{cartItem.name}</Text>
            </div>

            <Text fw="bold">
              {currency}
              {currency && priceFilter(cartItem, currency)}
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
                              onClick={() => this.addNewOption(name, item)}
                              key={item.id}
                              selected={
                                this.state.selectedOption.hasOwnProperty(name)
                                  ? this.state.selectedOption[name].value ===
                                    item.value
                                  : findOption(cartItem).includes(item.value)
                              }
                              color={item.value}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  }
                  return (
                    <div key={name}>
                      <Text size={14} lh={16}>
                        {name}:
                      </Text>
                      <div className="size">
                        {items.map((item) => (
                          <SizeBox
                            onClick={() => this.addNewOption(name, item)}
                            key={item.value}
                            selected={
                              this.state.selectedOption.hasOwnProperty(name)
                                ? this.state.selectedOption[name].value ===
                                  item.value
                                : findOption(cartItem).includes(item.value)
                            }
                            value={item.value}
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
                      <Text size={14} lh={16}>
                        {name}:
                      </Text>
                      <div className="size">
                        {items.map((item) => {
                          return (
                            <SizeBox
                              key={item.value}
                              selected={
                                this.state.selectedOption.hasOwnProperty(name)
                                  ? this.state.selectedOption[name].value ===
                                    item.value
                                  : findOption(cartItem).includes(item.value)
                              }
                              value={item.value}
                              onClick={() => this.addNewOption(name, item)}
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
            <AddIcon onClick={() => this.props.addOption({ ...this.state })} />
            <Text size={24} fw="medium" lh={38.4}>
              {cartItem.quantity}
            </Text>
            <RemoveIcon
              onClick={() =>
                cartItem.selectedOption.length <= 1
                  ? this.props.removeItem(this.state.id)
                  : cartItem.selectedOption.length >= 1
                  ? this.props.removeOption(this.state.id)
                  : -1
              }
            />
          </div>
          <div className="item-img">
            <img src={cartItem.gallery[0]} alt={cartItem.name} />
          </div>
        </div>
      </ItemsWrapper>
    );
  }
}

const mapStateToProps = ({ allCurrency: { currency } }) => {
  return {
    currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOption: (item) => dispatch(addToCart(item)),
    removeOption: (id) => dispatch(removeFromCart(id)),
    removeItem: (id) => dispatch(removeItemFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
