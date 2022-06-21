import { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

import NavBar from "../molecules/nav-bar";
import { Text } from "../styles/style-guide";
import { closeMiniCart } from "../reducers/is-added-to-cart-reducer";

const MainWrapper = styled.main`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  .title {
    margin: 0 auto;
    width: 90%;
    margin-bottom: 24px;
  }
`;

const Main = styled.div`
  margin: 0 auto;
  width: 90%;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb || 16}px`};
  overflow: ${({ overflow }) => (overflow ? overflow : "auto")};
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
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      show: false,
    };
  }
  render() {
    const {
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
      navigate,
      navId,
      overflow,
      link,
    } = this.props;

    return (
      <MainWrapper>
        <NavBar
          navId={navId}
          navigate={navigate}
          show={this.state.show}
          setShow={this.setState}
        />
        {link && (
          <div className="title">
            <Text mt={ht ? ht : 80} mb={hb ? hb : 0} fw={fw} size={size}>
              {link.toUpperCase()}
            </Text>
          </div>
        )}
        {this.state.show && (
          <Main
            mr={mr}
            ml={ml}
            mt={mt}
            mb={mb}
            pr={pr}
            pl={pl}
            pt={pt}
            pb={pb}
            overflow={overflow}
            onClick={() => {
              this.props.toggle(false);
              // this.setState((state) => ({
              //   ...this.state,
              //   show: false,
              // }));
            }}
          >
            <div className={overlay ? "overlay" : ""}></div>
            {children}
          </Main>
        )}
      </MainWrapper>
    );
  }
}
const mapStateToProps = ({ isAddedToCart, navlinks: { link } }) => {
  return {
    overlay: isAddedToCart,
    link,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (value) => dispatch(closeMiniCart(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScreenLayout);
