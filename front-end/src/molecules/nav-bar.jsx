import { Component } from "react";
import styled from "styled-components";
import CartIcon from "../vectors/cart-svg";
import { colors, Text } from "../styles/style-guide";
import CaretIcon from "../vectors/caret-svg";
import CartItem from "./cart-items";
import Button from "../atoms/button";
import { connect } from "react-redux";
import { toggleAddedToCart } from "../reducers/is-added-to-cart-reducer";
import { changelink, setLinks } from "../reducers/nav-reducer";
import { ALL_CATEGORY_QUERY, CURRENCY_QUERY } from "../query/queries";
import { priceFilter } from "../util/helper-function";

import { changeCurrency, getCurrencies } from "../reducers/currency-reducer";
import { CombinedField } from "@tilework/opus";
import Server from "../query/client";

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
    overflow: hidden;
    flex-direction: column;
    position: absolute;
    background-color: #ffffff;
    max-width: 325px;
    max-height: 677px;
    top: ${({ overlay }) => (overlay ? "5rem" : "-50rem")};
    transition: top 0.7s;
    right: calc(6% - 2rem);
    padding: 32px 16px;
    .total-items,
    .cart-wrapper,
    .btn,
    .total {
      display: flex;
    }
    .cart-wrapper {
      flex-direction: column;
      overflow: auto;
    }
    .btn {
      column-gap: 12px;
    }
    .total {
      justify-content: space-between;
      align-items: center;
      margin-bottom: 34px;
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
  .cart-items {
    position: relative;
    .item-count {
      position: absolute;
      right: -0.6rem;
      top: -0.65rem;
      width: 20px;
      height: 20px;
      background-color: ${colors["black"]};
      color: ${colors["white"]};
      font-size: 14px;
      font-weight: 700;
      font-family: Roboto;
      line-height: 20px;
      text-align: center;
      border-radius: 50%;
    }
  }
`;
class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleCurrency: false,
      totalCartAmount: 0,
      category: "",
      currency: [],
      link: "",
    };
  }

  async componentDidMount() {
    try {
      const { currencies, categories } = await Server.post(
        new CombinedField().add(ALL_CATEGORY_QUERY).add(CURRENCY_QUERY)
      );
      // this.props.changeCategory(currentLink ? currentLink : categories[0].name);
      this.props.setCurrencies(currencies);
      this.props.setCurrency(currencies[0].symbol);
      const id = this.props.navId ? this.props.navId : "all";
      console.log(id);
      const currentLink = categories.find(({ name }) => name === id).name;
      console.log({ categories });
      this.props.setCategory(categories);
      currencies &&
        this.props.setShow((state) => ({
          ...state,
          show: true,
        }));
      // categories &&
      //   this.setState((state) => ({
      //     ...state,
      //     link: categories.find(({ name }) => name === this.props.navId).name,
      //   }));
    } catch (error) {
      console.log(error.message);
    }
  }

  // async componentDidUpdate(prevProps, prevState) {
  //   // console.log(prevProps, prevState, this.props.link);
  //   if (prevProps.link !== this.props.link) {
  //     const { categories } = await Server.post(ALL_CATEGORY_QUERY);
  //     const currentLink =
  //       categories &&
  //       categories.find(({ name }) => name === this.props.navId).name;
  //     this.props.setCategory(categories);
  //     this.props.changeCategory(currentLink);
  //     console.log(this.props.link);
  //   }
  // }

  IncreaseCartItem = (item) => {
    this.props.increaseItemInCart(item);
  };
  decreaseCartItem = (item) => {
    this.props.deductItemInCart(item);
  };

  render() {
    const {
      cartItems,
      isAddedToCart,
      toggle,
      navlinks,
      link,
      setCurrency,
      currency,
      currencies,
    } = this.props;

    if (!navlinks || !currencies) {
      return <h1>Loading...</h1>;
    }
    console.log(this.state.link);
    const { navigate } = this.props;

    return (
      <Nav overlay={isAddedToCart} view={this.state.toggleCurrency}>
        <div className="container">
          <div className="links">
            {navlinks.map((name) => (
              <Text
                className={`link ${name === link ? "active" : ""}`}
                active={name === link && true}
                key={`link_id_${name}`}
                onClick={() => {
                  this.props.changeCategory(name);
                  this.props.navigate.push(`/${name}`);
                  this.setState((state) => ({
                    ...state,
                    link: name,
                  }));
                }}
              >
                {name.toUpperCase()}
              </Text>
            ))}
          </div>
          <img
            src="/a-logo.png"
            alt="logo"
            onClick={() => this.props.navigate.push("/")}
          />
          <div className="icon">
            <div
              onClick={() => {
                this.setState(({ toggleCurrency }) => ({
                  toggleCurrency: !toggleCurrency,
                }));
              }}
            >
              <Text fw="medium" size={18}>
                {currency}
              </Text>
              <CaretIcon
                ml={10}
                select={this.state.toggleCurrency ? true : false}
              />
            </div>
            <div className="cart-items">
              <CartIcon
                ml={22}
                onClick={() => {
                  toggle();
                }}
              />
              {cartItems.length !== 0 && (
                <div className="item-count">
                  {cartItems.reduce((a, b) => a + b.quantity, 0)}
                </div>
              )}
            </div>
          </div>
          {
            <div className="currencies">
              {currencies.map((cur) => (
                <div className="currency" key={`currencies_key_${cur.label}`}>
                  <Text
                    className="cur-value"
                    fw="medium"
                    size={18}
                    onClick={() => {
                      this.setState(({ toggleCurrency }) => ({
                        toggleCurrency: !toggleCurrency,
                      }));
                      setCurrency(cur.symbol);
                    }}
                  >
                    {cur.symbol} {cur.label}
                  </Text>
                </div>
              ))}
            </div>
          }
          <div className="cart-drawer">
            <div className="total-items">
              <Text fw="bold">
                My Bag,{" "}
                <Text fw="medium" inline>
                  {cartItems.length !== 0
                    ? cartItems.reduce((a, b) => a + b.quantity, 0)
                    : 0}{" "}
                  items
                </Text>
              </Text>
            </div>
            <div className="cart-wrapper">
              {cartItems.map((item) => (
                <CartItem key={`cart_key_${item.id}`} cartItem={item} />
              ))}
            </div>
            <div className="total">
              <Text fw="medium" lh={18}>
                Total
              </Text>
              <Text fw="strong">
                {currency}
                {cartItems.length !== 0
                  ? cartItems
                      .reduce((a, b) => {
                        return a + priceFilter(b, currency) * b.quantity;
                      }, 0)
                      .toFixed(2)
                  : 0}
              </Text>
            </div>
            <div className="btn">
              <Button
                title="view bag"
                outline
                onClick={() => {
                  navigate.push("/cart-items");
                  toggle();
                }}
              />{" "}
              <Button title="check out" />
            </div>
          </div>
        </div>
      </Nav>
    );
  }
}

const mapStateToProps = ({
  cartItems,
  isAddedToCart,
  navlinks: { links, link },
  allCurrency: { currency, currencies },
}) => {
  return {
    cartItems,
    isAddedToCart,
    navlinks: links,
    link,
    currency,
    currencies,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCategory: (link) => dispatch(setLinks(link)),
    changeCategory: (link) => dispatch(changelink(link)),
    toggle: () => dispatch(toggleAddedToCart()),
    setCurrencies: (value) => {
      dispatch(getCurrencies(value));
    },
    setCurrency: (value) => {
      dispatch(changeCurrency(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
