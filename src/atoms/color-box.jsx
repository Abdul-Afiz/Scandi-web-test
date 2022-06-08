import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledColorBox = styled.div`
  width: ${({ size }) => size || "16px"};
  height: ${({ size }) => size || "16px"};
  background: ${({ color }) => color && color};
  ${({ selected }) =>
    selected &&
    css`
      border: 1px solid ${colors["primary"]};
      box-shadow: 0 0 0 1px #fff inset;
    `}
`;

class ColorBox extends Component {
  render() {
    const { selected, color, onClick, size } = this.props;
    return (
      <StyledColorBox
        size={size}
        selected={selected}
        onClick={onClick}
        color={color}
      ></StyledColorBox>
    );
  }
}

export default ColorBox;
