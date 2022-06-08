import { Component } from "react";
import styled from "styled-components";
import ColorBox from "../atoms/color-box";
import SizeBox from "../atoms/size-box";
import { Text } from "../styles/style-guide";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";
import { splitTitle } from "../util/helper-function";

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
        object-fit: cover;
      }
    }
  }
`;

class CartItem extends Component {
  render() {
    const { cartItems } = this.props;
    return (
      <ItemsWrapper>
        <div className="item-details">
          <div className="item-detail">
            <div className="item-title">
              <Text fw="thin">{splitTitle(cartItems.title).head}</Text>
              <Text fw="thin">{splitTitle(cartItems.title).tail}</Text>
            </div>

            <Text fw="bold">${cartItems.price.toFixed(2)}</Text>
            <Text size={14} lh={16}>
              Size:
            </Text>
            <div className="size">
              {cartItems.size.map((size, i) => (
                <SizeBox
                  key={`size_id_${i}`}
                  selected={i === 1 && true}
                  value={size}
                />
              ))}
            </div>
            <Text size={14} lh={16}>
              Color:
            </Text>
            <div className="color">
              {cartItems.color.map((color, i) => (
                <ColorBox
                  key={`color_id_${i}`}
                  selected={i === 0 && true}
                  color={color}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="item-calcs">
          <div className="item-calc">
            <AddIcon />
            <Text size={24} fw="medium" lh={38.4}>
              {cartItems.totalPurchase}
            </Text>
            <RemoveIcon />
          </div>
          <div className="item-img">
            <img src={cartItems.img} alt={cartItems.title} />
          </div>
        </div>
      </ItemsWrapper>
    );
  }
}

export default CartItem;
