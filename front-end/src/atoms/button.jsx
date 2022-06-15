import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledButton = styled.button`
  display: block;
  width: 100%;
  padding-right: ${({ pr }) => `${pr || 29.5}px`};
  padding-left: ${({ pl }) => `${pl || 29.5}px`};
  padding-top: ${({ pt }) => `${pt || 13}px`};
  padding-bottom: ${({ pb }) => `${pb || 13}px`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  background: ${colors["primary"]};
  font-family: Raleway;
  color: ${colors["white"]};
  text-transform: uppercase;
  border: none;
  outline: none;
  font-size: ${({ fs }) => fs || 14}px;
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
    const { outline, title, onClick, mr, ml, mt, mb, pr, pl, pt, pb, fs } =
      this.props;
    return (
      <StyledButton
        fs={fs}
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        pr={pr}
        pl={pl}
        pt={pt}
        pb={pb}
        outline={outline}
        onClick={onClick}
      >
        {title}
      </StyledButton>
    );
  }
}

export default Button;
