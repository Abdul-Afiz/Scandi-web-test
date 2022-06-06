import { Component } from "react";
import styled from "styled-components";
import CartIcon from "../vectors/cart-svg";
import { colors, Text } from "../styles/style-guide";
import CaretIcon from "../vectors/caret-svg";
import CartItem from "./cart-items";
import Button from "../atoms/button";
import { connect } from "react-redux";
import { toggleAddedToCart } from "../reducers/is-added-to-cart-reducer";

const Nav = styled.nav`
  width: 100%;
  background-color: white;
  z-index: 1;
  position: relative;
  .container {
    max-width: 90%;
    margin: auto;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .cart-drawer {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    position: absolute;
    background-color: white;
    max-width: 325px;
    top: ${({ overlay }) => (overlay ? "5rem" : "-50rem")};
    transition: top 0.7s;
    right: calc(6% - 2rem);
    padding: 32px 16px;
    & > div {
      display: flex;
    }
    & > .btn {
      display: flex;
      column-gap: 12px;
    }
  }

  .links {
    display: flex;

    .link {
      padding: 0 1rem;
    }

    .active {
      position: relative;

      &:before {
        position: absolute;
        content: "";
        background: ${colors["primary"]};
        height: 2px;
        width: 100%;
        left: 0;
        bottom: -1.7rem;
      }
    }
  }

  .icon,
  .icon > div {
    display: flex;
    align-items: center;
  }

  .icon {
    position: relative;
  }
  .currencies {
    position: absolute;
    background-color: white;
    box-shadow: 0px 4px 35px 0px #a8acb030;
    right: calc(5% - 1.3rem);
    top: ${({ view }) => (view ? "3.5rem" : "-30rem")};
    transition: top 0.5s;
    .currency {
      display: flex;
      text-align: center;
      .cur-value {
        padding: 1.25rem 2.5rem 1rem 1.25rem;
        width: 100%;
        &:hover {
          background-color: ${colors["secondaryGrey"]};
        }
      }
    }
  }
`;

const nav_links = [
  {
    id: 1,
    page: "/women",
    title: "WOMEN",
  },
  {
    id: 2,
    page: "/men",
    title: "MEN",
  },
  {
    id: 3,
    page: "/kids",
    title: "KIDS",
  },
];
const currency = [
  { id: 1, sign: "$", value: "USD" },
  { id: 2, sign: "€", value: "EUR" },
  { id: 3, sign: "¥", value: "JPY" },
];
class NavBar extends Component {
  state = {
    currency: "$",
    showCurrency: false,
  };
  render() {
    const { cartItems, isAddedToCart, toggle } = this.props;

    return (
      <Nav overlay={isAddedToCart} view={this.state.showCurrency}>
        <div className="container">
          <div className="links">
            {nav_links.map((link, i) => (
              <Text
                className={`link ${i === 0 ? "active" : ""}`}
                active={i === 0 && true}
                key={`link_id_${link.id}`}
              >
                {link.title}
              </Text>
            ))}
          </div>
          <img src="/a-logo.png" alt="logo" />
          <div className="icon">
            <div
              onClick={() => {
                this.setState(({ showCurrency }) => ({
                  showCurrency: !showCurrency,
                }));
              }}
            >
              <Text fw="medium" size={18}>
                {this.state.currency}
              </Text>
              <CaretIcon
                ml={10}
                select={this.state.showCurrency ? true : false}
              />
            </div>
            <div className="cart-items">
              <CartIcon
                ml={22}
                onClick={() => {
                  toggle();
                }}
              />
            </div>
          </div>
          {
            <div className="currencies">
              {currency.map((cur) => (
                <div className="currency" key={`currencies_key_${cur.id}`}>
                  <Text
                    className="cur-value"
                    fw="medium"
                    size={18}
                    onClick={() =>
                      this.setState(({ showCurrency }) => ({
                        currency: cur.sign,
                        showCurrency: !showCurrency,
                      }))
                    }
                  >
                    {cur.sign} {cur.value}
                  </Text>
                </div>
              ))}
            </div>
          }
          <div className="cart-drawer">
            <div>
              <Text fw="bold">
                My Bag,{" "}
                <Text fw="medium" inline>
                  3 items
                </Text>
              </Text>
            </div>
            {cartItems.map((item) => (
              <CartItem key={`cart_key_${item.id}`} cartItems={item} />
            ))}
            <div className="btn">
              <Button title="view bag" outline /> <Button title="check out" />
            </div>
          </div>
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = ({ cartItems, isAddedToCart }) => {
  return {
    cartItems: cartItems,
    isAddedToCart: isAddedToCart,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: () => dispatch(toggleAddedToCart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
