import { Component } from "react";
import styled from "styled-components";
import { css } from "styled-components";
import { colors, Text } from "../styles/style-guide";

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

  opacity: ${({ inStock }) => inStock && 0.5};
  position: relative;
  ${({ inStock }) =>
    inStock &&
    css`
      .inStock {
        position: absolute;
        left: 50%;
        transform: translate(-50%, 0);
        top: 40%;
        font-size: 24px;
        line-height: 38.4px;
        color: ${colors["grey_2"]};
      }
    `}

  .img {
    width: 100%;
    max-height: 330px;
    position: relative;
    z-index: -1;
    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

class ProductCard extends Component {
  render() {
    const {
      img,
      inStock,
      title,
      price,
      mr,
      ml,
      mt,
      mb,
      pr,
      pl,
      pt,
      pb,
      onClick,
    } = this.props;

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
        inStock={!inStock && true}
        onClick={onClick}
      >
        <div className="img">
          <img src={img} alt={title} />
        </div>
        <Text fw="thin" size={18} mt={24} mb={8}>
          {title}
        </Text>
        <Text fw="medium" size={18}>
          ${price.toFixed(2)}
        </Text>
        {!inStock && (
          <div className={!inStock ? "inStock" : ""}>OUT OF STOCK</div>
        )}
      </ProductWrapper>
    );
  }
}

export default ProductCard;
