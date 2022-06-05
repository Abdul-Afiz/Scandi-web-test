import { Component } from "react";
import styled from "styled-components";
import { Text } from "../styles/style-guide";

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 100%;
  height: 100%;
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  & > img {
    max-width: 100%;
    object-fit: contain;
  }
`;

class Product extends Component {
  render() {
    const { img, title, price, mr, ml, mt, mb, pr, pl, pt, pb } = this.props;
    return (
      <ProductWrapper
        mr={mr}
        ml={ml}
        mt={mt}
        mb={mb}
        pr={pr}
        pl={pl}
        pt={pt}
        pb={pb}
      >
        <img src={img} alt={title} />
        <Text fw="thin" size={18} mt={24} mb={8}>
          {title}
        </Text>
        <Text fw="medium" size={18}>
          ${price.toFixed(2)}
        </Text>
      </ProductWrapper>
    );
  }
}

export default Product;
