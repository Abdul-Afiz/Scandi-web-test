import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: ${({ lh }) => lh || "24px"};
  font-size: ${({ fs }) => fs || "14px"};
  width: ${({ w }) => w || "24px"};
  font-weight: ${({ fw }) => fw || 400};
  font-family: "Source Sans Pro";
  text-transform: uppercase;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
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
    const {
      selected,
      value,
      onClick,
      fw,
      fs,
      lh,
      w,
      mr,
      ml,
      mt,
      mb,
      pr,
      pl,
      pt,
      pb,
    } = this.props;
    return (
      <StyledBox
        selected={selected}
        onClick={onClick}
        fw={fw}
        fs={fs}
        lh={lh}
        w={w}
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        pr={pr}
        pl={pl}
        pt={pt}
        pb={pb}
      >
        {value}
      </StyledBox>
    );
  }
}

export default SizeBox;
