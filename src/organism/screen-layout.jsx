import { Component } from "react";
import styled from "styled-components";

import NavBar from "../molecules/nav-bar";
import { Text } from "../styles/style-guide";

const Main = styled.main`
  height: 100%;
`;

class ScreenLayout extends Component {
  render() {
    const { heading, fw, size, mt, mb, children } = this.props;
    return (
      <Main>
        <NavBar />
        {heading && (
          <Text mt={mt ? mt : 80} mb={mb ? mb : 0} fw={fw} size={size}>
            {heading}
          </Text>
        )}
        <Main>{children}</Main>
      </Main>
    );
  }
}

export default ScreenLayout;
