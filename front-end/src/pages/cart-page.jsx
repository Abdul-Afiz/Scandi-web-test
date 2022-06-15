import { Component } from "react";
import styled from "styled-components";
import ScreenLayout from "../organism/screen-layout";
import { connect } from "react-redux";
import AddIcon from "../vectors/add-svg";
import RemoveIcon from "../vectors/subtract-svg";
import SizeBox from "../atoms/size-box";
import ColorBox from "../atoms/color-box";
import { Text } from "../styles/style-guide";
import { splitTitle } from "../util/helper-function";
import Button from "../atoms/button";

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
    this.state = {};
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
    const { cartItems } = this.props;

    return (
      <ScreenLayout mb={55} heading="CART" size={32} fw="strong">
        <CartWrapper>
          {cartItems.map((item) => (
            <div className="items" key={`item_keys_${item.title}`}>
              <div className="item-details">
                <div className="item-detail">
                  <div className="item-title">
                    <Text fw="bold" size={30} lh={27} mb={16}>
                      {splitTitle(item.title).head}
                    </Text>
                    <Text size={30} lh={27}>
                      {splitTitle(item.title).tail}
                    </Text>
                  </div>

                  <Text mt={20} mb={20} fw="strong" size={24} lh={24}>
                    ${item.price.toFixed(2)}
                  </Text>
                  <Text size={18} lh={18} fw="strong">
                    Size:
                  </Text>
                  <div className="size">
                    {item.size.map((size, i) => (
                      <SizeBox
                        key={`size_id_${i}`}
                        selected={i === 1 && true}
                        value={size}
                        pt={12}
                        pb={12}
                        pr={28}
                        pl={28}
                        fs="16px"
                      />
                    ))}
                  </div>
                  <Text size={14} lh={16}>
                    Color:
                  </Text>
                  <div className="color">
                    {item.color.map((color, i) => (
                      <ColorBox
                        key={`color_id_${i}`}
                        selected={i === 0 && true}
                        color={color}
                        size="32px"
                      />
                    ))}
                  </div>
                </div>
              </div>

              <div className="item-calcs">
                <div className="item-calc">
                  <AddIcon />
                  <Text size={24} fw="medium" lh={38.4}>
                    {item.totalPurchase}
                  </Text>
                  <RemoveIcon />
                </div>
                <div className="item-img">
                  <img src={item.img} alt={item.title} />
                </div>
              </div>
            </div>
          ))}
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

const mapStateToProps = ({ cartItems }) => {
  return {
    cartItems,
  };
};

export default connect(mapStateToProps)(CartPage);
