import { Component } from "react";
import { StyledSvg } from "./cart-svg";

class PrevIcon extends Component {
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
        <rect width="24" height="24" fill="black" fillOpacity="0.73" />
        <path
          d="M14.25 6.06857L8.625 11.6876L14.25 17.3066"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </StyledSvg>
    );
  }
}

export default PrevIcon;
