import { Component } from "react";
import styled from "styled-components";
import { Heading } from "../styles/style-guide";
import Button from "./button";
import NavBar from "./nav-bar";

const Main = styled.main`
  flex: 1;
  height: 100vh;
  //   background-color: red;
`;

class ScreenLayout extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Main>
          {/* <Button title="check out" /> */}
          <Heading category>Apollo</Heading>
        </Main>
      </div>
    );
  }
}

export default ScreenLayout;
