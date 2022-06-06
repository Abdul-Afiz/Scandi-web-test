import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import NavBar from "../molecules/nav-bar";
import { Text } from "../styles/style-guide";

const Main = styled.main`
  height: 100%;
  max-width: 90%;
  margin: 0 auto;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  .overlay {
    position: fixed;
    background: #39374838;
    transition: background 0.5s;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }
`;

class ScreenLayout extends Component {
  render() {
    const {
      heading,
      fw,
      size,
      ht,
      hb,
      mr,
      ml,
      mt,
      mb,
      pr,
      pl,
      pt,
      pb,
      children,
      overlay,
    } = this.props;
    return (
      <div>
        <NavBar />
        {heading && (
          <Main>
            <Text mt={ht ? ht : 80} mb={hb ? hb : 0} fw={fw} size={size}>
              {heading}
            </Text>
          </Main>
        )}
        <Main mr={mr} ml={ml} mt={mt} mb={mb} pr={pr} pl={pl} pt={pt} pb={pb}>
          <div className={overlay ? "overlay" : ""}></div>
          {children}
        </Main>
      </div>
    );
  }
}
const mapStateToProps = ({ isAddedToCart }) => {
  return {
    overlay: isAddedToCart,
  };
};

export default connect(mapStateToProps)(ScreenLayout);
