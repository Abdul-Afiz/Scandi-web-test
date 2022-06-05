import { Component } from "react";
import styled from "styled-components";
import ColorBox from "../atoms/color-box";
import SizeBox from "../atoms/size-box";
import { Text } from "../styles/style-guide";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";

const ItemsWrapper = styled.div`
  height: 190px;
  display: flex;
  .item-details {
    display: flex;
    flex-direction: column;
    row-gap: 8px;
  }
  .size {
    display: flex;
    justify-content: space-between;
    column-gap: 8px;
  }
  .color {
    display: flex;
    column-gap: 8px;
  }
  .item-quantity {
    display: flex;
    & > div {
      display: flex;
    }

    & > div:nth-of-type(1) {
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
    }

    & > div:nth-of-type(2) {
      width: 100%;

      & > img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }
`;

const cartItems = [
  {
    id: 1,
    title: "Apollo Running Short",
    img: "/product-image.png",
    price: 50,
    size: ["xs", "s", "m", "l"],
    color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
    totalPurchase: 0,
  },
  {
    id: 2,
    title: "Jupiter Wayfarer",
    img: "/Product D.png",
    price: 75,
    size: ["s", "m"],
    color: ["#1D1F22", "#15A4C3", "#EA8120"],
    totalPurchase: 0,
  },
];

class CartItem extends Component {
  render() {
    return (
      <ItemsWrapper>
        <div className="item-details">
          <Text fw="thin">{cartItems[0].title}</Text>
          <Text fw="bold">${cartItems[0].price.toFixed(2)}</Text>
          <Text size={14}>Size:</Text>

          <div className="size">
            {cartItems[0].size.map((size, i) => (
              <SizeBox
                key={`size_id_${i}`}
                selected={i === 1 && true}
                value={size}
              />
            ))}
          </div>
          <Text size={14}>Color:</Text>
          <div className="color">
            {cartItems[0].color.map((color, i) => (
              <ColorBox
                key={`color_id_${i}`}
                selected={i === 0 && true}
                color={color}
              />
            ))}
          </div>
        </div>
        <div className="item-quantity">
          <div>
            <AddIcon />
            <Text>{cartItems[0].totalPurchase}</Text>
            <RemoveIcon />
          </div>
          <div>
            <img src={cartItems[0].img} alt={cartItems[0].title} />
          </div>
        </div>
      </ItemsWrapper>
    );
  }
}

export default CartItem;
