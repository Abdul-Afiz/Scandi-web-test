import { Component } from "react";
import { StyledSvg } from "./cart-svg";

class RemoveIcon extends Component {
  render() {
    const { mr, ml, mt, mb, pr, pl, pt, pb, onClick } = this.props;
    return (
      <StyledSvg
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        pr={pr}
        pl={pl}
        pt={pt}
        pb={pb}
        onClick={onClick}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 12H16"
          stroke="#1D1F22"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="0.5" y="0.5" width="23" height="23" stroke="#1D1F22" />
      </StyledSvg>
    );
  }
}

export default RemoveIcon;
