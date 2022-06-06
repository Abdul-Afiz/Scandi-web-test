import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledBox = styled.div`
  text-align: center;
  line-height: 24px;
  font-size: 14px;
  width: 24px;
  font-weight: 400;
  font-family: "Source Sans Pro";
  text-transform: uppercase;
  border: 1px solid ${colors["black"]};
  ${({ selected }) =>
    selected &&
    css`
      background: ${colors["black"]};
      color: white;
    `}
`;

class SizeBox extends Component {
  render() {
    const { selected, value, onClick } = this.props;
    return (
      <StyledBox selected={selected} onClick={onClick}>
        {value}
      </StyledBox>
    );
  }
}

export default SizeBox;
