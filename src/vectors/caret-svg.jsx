import { Component } from "react";
import { StyledSvg } from "./cart-svg";

class CaretIcon extends Component {
  render() {
    const { select, mr, ml, mt, mb, pr, pl, pt, pb, onClick } = this.props;
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
        width="8"
        height="4"
        viewBox="0 0 8 4"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={select ? "M1 3.5L4 0.5L7 3.5" : "M1 0.5L4 3.5L7 0.5"}
          stroke="black"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </StyledSvg>
    );
  }
}

export default CaretIcon;
