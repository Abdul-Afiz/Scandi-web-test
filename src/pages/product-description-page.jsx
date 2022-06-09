import { Component } from "react";
import { connect } from "react-redux";
import ScreenLayout from "../organism/screen-layout";
import styled from "styled-components";
import { Text } from "../styles/style-guide";
import SizeBox from "../atoms/size-box";
import Button from "../atoms/button";
import ColorBox from "../atoms/color-box";
import { splitTitle } from "../util/helper-function";

export const PdpContainer = styled.div`
  display: grid;
  grid-template-columns: 0.3fr 1.5fr;
  margin-top: 80px;

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
        object-fit: cover;
      }
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

const data = {
  id: 1,
  inStock: true,
  title: "Apollo Running Short",
  img: "/product-image.png",
  images: ["/product-image.png", "/product-image.png", "/product-image.png"],
  price: 50,
  size: ["xs", "s", "m", "l"],
  color: ["#D3D2D5", "#2B2B2B", "#0F6450"],
  totalPurchase: 0,
  description:
    "Find stunning women's cocktail dresses and party dresses. Stand out in lace and metallic cocktail dresses and party dresses from all your favorite brands.",
};

class ProductDescriptionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    const { match, products } = this.props;
    this.id = match.params.id;
    this.findProduct = products.find((prod) => prod.id == this.id);
  }
  componentDidMount() {
    this.setState({ color: this.findProduct });
    // setTimeout(() => {
    // }, 1000);
  }
  render() {
    return (
      <ScreenLayout>
        <PdpContainer>
          <div className="small-img">
            {data.images.map((img, i) => (
              <div className="img" key={`img_key_${i}`}>
                <img src={img} alt={img} />
              </div>
            ))}
          </div>
          <div className="item-detail">
            <div className="big-img">
              <img src={data.img} alt={data.title} />
            </div>
            <div className="item-details">
              <Text size={30} mb={16} fw="bold" lh={27}>
                {splitTitle(data.title).head}
              </Text>
              <Text size={30} mb={43} lh={27}>
                {splitTitle(data.title).tail}
              </Text>
              <div className="size">
                <Text size={18} mt={8} fw="strong">
                  SIZE:
                </Text>
                <div className="box-size">
                  {data.size.map((size, i) => (
                    <SizeBox
                      key={i}
                      value={size}
                      fs="16px"
                      lh="45px"
                      w="100%"
                    />
                  ))}
                </div>
              </div>
              <div className="color">
                <Text size={18} fw="strong">
                  COLOR:
                </Text>
                <div className="box-color">
                  {data.color.map((color, i) => (
                    <ColorBox key={i} color={color} size="36px" />
                  ))}
                </div>
              </div>
              <Text mt={12} mb={10} size={16} fw="strong">
                PRICE:
              </Text>
              <Text fw="strong" size={24} lh={18} mb={20}>
                ${data.price.toFixed(2)}
              </Text>
              <Button title="Add to Cart" pt={16} pb={16} fs={16} mb={40} />
              <Text lh={25.59} font="Roboto">
                {data.description}
              </Text>
            </div>
          </div>
        </PdpContainer>
      </ScreenLayout>
    );
  }
}

const matchStateToProps = ({ products }) => {
  return {
    products,
  };
};

export default connect(matchStateToProps)(ProductDescriptionPage);
