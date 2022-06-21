import { Component } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import { css } from "styled-components";
import { addToCart } from "../reducers/cart-items-reducer";
import { colors, Text } from "../styles/style-guide";
import { priceFilter, setDefaultAtrributes } from "../util/helper-function";
import AddtoCaretIcon from "../vectors/add-to-caret-svg";

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

    & > img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: relative;
      z-index: -1;
    }
    .add-item {
      z-index: 1;
      position: absolute;
      display: none;
      right: 30px;
      bottom: 60px;
    }
  }

  &:hover {
    box-shadow: 0px 4px 35px 0px #a8acb030;

    .add-item.show {
      display: block;
    }
  }
`;

class ProductCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      selectedOption: null,
      quantity: 0,
    };
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      product: this.props.item,
      selectedOption: setDefaultAtrributes(this.props.item),
    }));
  }

  handleAddItemToCart = () => {
    this.props.addProductToCart({
      ...this.state.product,
      selectedOption: this.state.selectedOption,
      quantity: 0,
    });
  };
  render() {
    const { mr, ml, mt, mb, pr, pl, pt, pb, item, onClick, currency } =
      this.props;

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
        inStock={!item.inStock && true}
        onClick={onClick}
      >
        <div className="img">
          <img src={item.gallery[0]} alt={item.name} />
          <div
            className={`${item.inStock && "show"} add-item`}
            onClick={() => this.handleAddItemToCart()}
          >
            <AddtoCaretIcon />
          </div>
        </div>
        <Text fw="thin" size={18} mt={24} mb={8}>
          {item.brand} {item.name}
        </Text>
        <Text fw="medium" size={18}>
          {currency}
          {this.state.product && priceFilter(this.state.product, currency)}
        </Text>
        {!item.inStock && (
          <div className={!item.inStock ? "inStock" : ""}>OUT OF STOCK</div>
        )}
      </ProductWrapper>
    );
  }
}

const mapStateToProps = ({ allCurrency: { currency } }) => {
  return {
    currency,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
