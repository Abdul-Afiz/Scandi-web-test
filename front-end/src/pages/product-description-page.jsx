import { Component } from "react";
import { connect } from "react-redux";
import styled, { css } from "styled-components";
import parse from "html-react-parser";

import ScreenLayout from "../organism/screen-layout";
import { colors, Text } from "../styles/style-guide";
import SizeBox from "../atoms/size-box";
import Button from "../atoms/button";
import ColorBox from "../atoms/color-box";

import { priceFilter, setDefaultAtrributes } from "../util/helper-function";
import { getProduct } from "../reducers/single-product-reducer";
import { addToCart } from "../reducers/cart-items-reducer";

import Server from "../query/client";
import { SINGLE_PRODUCT } from "../query/queries";
export const PdpContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.5fr;

  .small-img {
    display: flex;
    flex-direction: column;
    row-gap: 40px;
    .img {
      height: 80px;
      width: 79px;
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
  }

  .item-detail {
    display: grid;
    grid-template-columns: 0.75fr 292px;
    column-gap: 50px;

    .big-img {
      max-width: 610px;
      max-height: 511px;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      ${({ inStock }) =>
        inStock &&
        css`
          height: 100%;
          position: relative;
          opacity: 0.3;
          pointer-events: none;
          .not-in-stock {
            position: absolute;
            color: ${colors["grey_2"]};
            left: 50%;
            transform: translate(-50%, 0);
            top: 40%;
            font-size: 32px;
            line-height: 38.4px;
          }
        `}
    }
    .item-details {
      display: flex;
      flex-direction: column;
      column-gap: 100px;

      .box-size,
      .box-color {
        display: flex;
        margin-bottom: 24px;
      }
      .box-color {
        column-gap: 8px;
      }
      .box-size {
        column-gap: 12px;
        width: 100%;
        height: 45px;
      }
    }
  }
`;

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
      selectedAttr: null,
      imgIndex: 0,
    };
  }

  async componentDidMount() {
    try {
      const { id } = this.props.match.params;
      const { product } = await Server.post(SINGLE_PRODUCT(id));
      product && this.props.fetchSingleProduct(product);
      this.setState(() => ({
        product: product,
        selectedAttr: setDefaultAtrributes(product),
      }));
    } catch (error) {
      console.error(error.message);
    }
  }

  handleSelectAttr(name, item) {
    this.setState((currentState) => ({
      selectedAttr: {
        ...currentState.selectedAttr,
        [name]: item,
      },
    }));
  }

  handleImgChange = (index) =>
    this.setState((state) => ({
      imgIndex: index,
    }));

  render() {
    const { imgIndex } = this.state;
    const product = this.props.singleProduct;
    if (product.length === 0) {
      return <h1>Loading!!!!</h1>;
    }

    return (
      <ScreenLayout navigate={this.props.history} heading={null}>
        {
          <PdpContainer inStock={!product.inStock}>
            <div className="small-img">
              {product.gallery.map((img, i) => (
                <div
                  className="img"
                  key={`img_key_${i}`}
                  onClick={() => this.handleImgChange(i)}
                >
                  <img src={img} alt={img} />
                </div>
              ))}
            </div>
            <div className="item-detail">
              <div className="big-img">
                <img src={product.gallery[imgIndex]} alt={product.name} />
                {!product.inStock && (
                  <div className="not-in-stock">OUT OF STOCK</div>
                )}
              </div>
              <div className="item-details">
                <Text size={30} mb={16} fw="bold" lh={27}>
                  {product.brand}
                </Text>
                <Text size={30} mb={43} lh={27}>
                  {product.name}
                </Text>
                {product.category === "tech" ? (
                  <div className="color">
                    {product.attributes.map(({ name, type, items }) => {
                      if (type === "swatch") {
                        return (
                          <div key={name}>
                            <Text size={18} fw="strong">
                              {name.toUpperCase()}:
                            </Text>
                            <div className="box-color">
                              {items.map((item) => (
                                <ColorBox
                                  onClick={() =>
                                    this.handleSelectAttr(name, item)
                                  }
                                  key={item.id}
                                  color={item.value}
                                  size="36px"
                                  selected={
                                    this.state.selectedAttr &&
                                    item.id ===
                                      this.state.selectedAttr[name].displayValue
                                  }
                                />
                              ))}
                            </div>
                          </div>
                        );
                      }
                      return (
                        <div key={name}>
                          <Text size={16} mb={5} fw="strong">
                            {name.toUpperCase()}:
                          </Text>
                          <div className="box-color">
                            {items.map((item) => (
                              <SizeBox
                                onClick={() =>
                                  this.handleSelectAttr(name, item)
                                }
                                key={item.id}
                                value={item.value}
                                fs="16px"
                                lh="45px"
                                w="100%"
                                selected={
                                  this.state.selectedAttr &&
                                  item.id ===
                                    this.state.selectedAttr[name].displayValue
                                }
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : product.category === "clothes" ? (
                  <div className="size">
                    {product.attributes.map(({ name, items }) => {
                      return (
                        <div key={name}>
                          <Text size={16} mb={5} fw="strong">
                            {name.toUpperCase()}:
                          </Text>
                          <div className="box-size">
                            {items.map((item) => (
                              <SizeBox
                                onClick={() =>
                                  this.handleSelectAttr(name, item)
                                }
                                key={item.id}
                                value={item.value}
                                fs="16px"
                                lh="45px"
                                w="30%"
                                active={item.id}
                                selected={
                                  this.state.selectedAttr &&
                                  item.id ===
                                    this.state.selectedAttr[name].displayValue
                                }
                              />
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  ""
                )}
                <Text mt={12} mb={10} size={16} fw="strong">
                  PRICE:
                </Text>
                <Text fw="strong" size={24} lh={18} mb={20}>
                  {this.props.currency}
                  {this.props.currency &&
                    priceFilter(product, this.props.currency)}
                </Text>
                <Button
                  disabled={!product.inStock && true}
                  title="Add to Cart"
                  pt={16}
                  pb={16}
                  fs={16}
                  mb={40}
                  onClick={() =>
                    this.props.addToCart({
                      ...this.state.product,
                      selectedOption: this.state.selectedAttr,
                      quantity: 0,
                    })
                  }
                />
                <div>{parse(product.description)}</div>
              </div>
            </div>
          </PdpContainer>
        }
      </ScreenLayout>
    );
  }
}

const matchStateToProps = ({ allCurrency: { currency }, singleProduct }) => {
  return {
    currency,
    singleProduct,
  };
};

const matchDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => {
      dispatch(addToCart(item));
    },
    fetchSingleProduct: (item) => dispatch(getProduct(item)),
  };
};

export default connect(
  matchStateToProps,
  matchDispatchToProps
)(ProductDescriptionPage);
