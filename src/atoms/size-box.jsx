import { Component } from "react";
import styled, { css } from "styled-components";
import { colors } from "../styles/style-guide";

const StyledBox = styled.div`
  text-align: center;
  line-height: ${({ lh }) => lh || "24px"};
  font-size: ${({ fs }) => fs || "14px"};
  width: ${({ w }) => w || "24px"};
  font-weight: ${({ fw }) => fw || 400};
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
    const { selected, value, onClick, fw, fs, lh, w } = this.props;
    return (
      <StyledBox
        selected={selected}
        onClick={onClick}
        fw={fw}
        fs={fs}
        lh={lh}
        w={w}
      >
        {value}
      </StyledBox>
    );
  }
}

export default SizeBox;
