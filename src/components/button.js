import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledButton = styled.button`
  display: block;
  padding: 13px 29.5px;
  background: ${colors["primary"]};
  font-family: Raleway;
  color: ${colors["white"]};
  text-transform: uppercase;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 600;
  ${({ outline }) =>
    outline &&
    css`
      background: ${colors["white"]};
      color: ${colors["black"]};
      border: 1px solid ${colors["black"]};
    `}
`;

class Button extends Component {
  render() {
    const { outline, title, onClick } = this.props;
    return (
      <StyledButton outline={outline} onClick={onClick}>
        {title}
      </StyledButton>
    );
  }
}

export default Button;
