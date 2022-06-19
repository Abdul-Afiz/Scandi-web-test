import { Component } from "react";
import { StyledSvg } from "./cart-svg";

class NextIcon extends Component {
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
        <rect
          width="24"
          height="24"
          transform="matrix(-1 0 0 1 24 0)"
          fill="black"
          fill-opacity="0.73"
        />
        <path
          d="M9.75 6.06808L15.375 11.6871L9.75 17.3062"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </StyledSvg>
    );
  }
}

export default NextIcon;

<svg></svg>;
