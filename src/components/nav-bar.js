import { Component } from "react";
import styled from "styled-components";
import CartIcon from "../vectors/cart-svg";
import { colors, Text } from "../styles/style-guide";
import CaretIcon from "../vectors/caret-svg";

const Nav = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
        height: 1px;
        width: 100%;
        left: 0;
        bottom: -1.9rem;
            }
         }
  }
  .icon{
      display flex;
      align-items: center;
  }
`;

class NavBar extends Component {
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
      { id: 2, sign: "", value: "USD" },
      { id: 1, sign: "$", value: "USD" },
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
          <CaretIcon />
          <CartIcon ml={22} />
        </div>
      </Nav>
    );
  }
}

export default NavBar;
