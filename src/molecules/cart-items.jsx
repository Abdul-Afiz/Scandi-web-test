import { Component } from "react";
import styled from "styled-components";
import ColorBox from "../atoms/color-box";
import SizeBox from "../atoms/size-box";
import { Text } from "../styles/style-guide";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";

const ItemsWrapper = styled.div`
  .item-details,
  .item-detail,
  .item-details > div:nth-of-type(2) {
    display: flex;
    & {
      column-gap: 20px;
      justify-content: space-between;
    }
    & > div:nth-of-type(2) {
      flex-direction: column;
      align-items: center;
      margin-right: 8px;
    }
    .item-detail {
      flex-direction: column;
      row-gap: 8px;
    }
    .size {
      display: flex;
      justify-content: flex-start;
      column-gap: 8px;
    }
    .item-detail .color {
      display: flex;
      justify-content: flex-start;
      flex-direction: row;
      column-gap: 8px;
    }
  }

  .item-quantity {
    display: flex;
    max-width: 121px;
    & > img {
      max-width: 100%;
      object-fit: cover;
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
            <Text fw="thin">{cartItems.title}</Text>
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
          <div>
            <AddIcon />
            <Text size={24} fw="medium" lh={38.4}>
              {cartItems.totalPurchase}
            </Text>
            <RemoveIcon />
          </div>
        </div>

        <div className="item-quantity">
          <img src={cartItems.img} alt={cartItems.title} />
        </div>
      </ItemsWrapper>
    );
  }
}

export default CartItem;
