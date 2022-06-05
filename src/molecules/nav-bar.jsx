import { Component } from "react";
import styled from "styled-components";
import CartIcon from "../vectors/cart-svg";
import { colors, Text } from "../styles/style-guide";
import CaretIcon from "../vectors/caret-svg";
import CartItem from "./cart-items";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .cart-drawer{
    position: absolute;
    content: '';
    max-width: 325px;
    top: 5rem;
    right: 0;
    & > div{
      display: flex;
    }
 
  }
  
  .links {
      display: flex;
    
      .link {
          padding: 0 1rem;
        }
        
        .active{
            position: relative;

        &:before{
        position: absolute;
        content:"";
        background: ${colors["primary"]};
        height: 2px;
        width: 100%;
        left: 0;
        bottom: -1.875rem;
            }
         }
  }

  .icon, .icon > div{
      display flex;
      align-items: center;
      position: relative;
    }

  .currencies{
    box-shadow: 0px 4px 35px 0px #A8ACB030;
    position: absolute;
    right: calc(3% - 4rem);
    top: 4rem;
     .currency{
         display: flex;
         text-align: center;
         .cur-value{
             padding: 1.25rem 2.5rem 1rem 1.25rem;
             width: 100%;
             &:hover {
                 background-color:${colors["secondaryGrey"]};
             }
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

class NavBar extends Component {
  state = {
    currency: "$",
    showCurrency: false,
  };
  render() {
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
      { id: 1, sign: "¥", value: "JPY" },
    ];

    return (
      <Nav>
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
            onClick={() =>
              this.setState(({ showCurrency }) => ({
                showCurrency: !showCurrency,
              }))
            }
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
            <CartIcon ml={22} />
          </div>
        </div>
        {this.state.showCurrency && (
          <div className="currencies">
            {currency.map((cur) => (
              <div className="currency" key={`currencies_key_${cur.id}`}>
                <Text
                  className="cur-value"
                  fw="medium"
                  size={18}
                  onClick={() =>
                    this.setState(({ currency, showCurrency }) => ({
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
        )}
        <div className="cart-drawer">
          <div>
            <Text fw="bold" mb={32}>
              My Bag,{" "}
              <Text fw="medium" inline>
                3 items
              </Text>
            </Text>
          </div>
          <CartItem />
        </div>
      </Nav>
    );
  }
}

export default NavBar;
