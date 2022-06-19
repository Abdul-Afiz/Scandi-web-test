import { Component } from "react";
import styled from "styled-components";
import ColorBox from "../atoms/color-box";
import SizeBox from "../atoms/size-box";
import { Text } from "../styles/style-guide";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";
import {
  splitTitle,
  priceFilter,
  setCartMiniDefaultAtrributes,
  findOption,
} from "../util/helper-function";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../reducers/cart-items-reducer";

const ItemsWrapper = styled.div`
  display: grid;
  grid-template-columns: 276px 1fr;
  column-gap: 4px;
  /* margin: 32px 0; */
  padding-top: 24px;
  padding-bottom: 22px;
  border-top: 1px solid #e5e5e5;
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
      margin-bottom: 16px;
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
      max-width: 200px;
      & > img {
        width: 100%;
        height: 100%;
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

    console.log(this.state);
    return (
      <ItemsWrapper>
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
                        <Text size={18} lh={18} fw="strong">
                          {name.toUpperCase()}:
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
                        {name.toUpperCase()}:
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
                            pt={12}
                            pb={12}
                            pr={28}
                            pl={28}
                            fs="16px"
                            w="10%"
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
                      <Text size={18} lh={18} fw="strong">
                        {name.toUpperCase()}:
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
            <AddIcon onClick={() => this.props.addOption({ ...this.state })} />
            <Text size={24} fw="medium" lh={38.4}>
              {cartItem.quantity}
            </Text>
            <RemoveIcon
              onClick={() => this.props.removeOption(this.state.id)}
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

const mapStateToProps = ({ currency }) => {
  return {
    currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addOption: (item) => dispatch(addToCart(item)),
    removeOption: (id) => dispatch(removeFromCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);
