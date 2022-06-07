import { Component } from "react";
import { connect } from "react-redux";
import ScreenLayout from "../organism/screen-layout";
import styled from "styled-components";
import { Text } from "../styles/style-guide";
import SizeBox from "../atoms/size-box";
import Button from "../atoms/button";

export const PdpContainer = styled.div`
  display: flex;
  margin-top: 80px;
  column-gap: 40px;

  div {
    display: flex;
  }

  div:nth-of-type(1) {
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

  & > div:nth-of-type(2) {
    .big-img {
      width: 610px;
      height: 511px;
      & > img {
        max-width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .item-details {
      display: flex;
      flex-direction: column;
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
    console.log(data);
    // console.log(this.state);
    return (
      <ScreenLayout>
        <PdpContainer>
          <div>
            {data.images.map((img, i) => (
              <div className="img" key={`img_key_${i}`}>
                <img src={img} />
              </div>
            ))}
          </div>
          <div>
            <div className="big-img">
              <img src={data.img} alt={data.title} />
            </div>
            <div className="item-details">
              <Text>{data.title}</Text>
              <div className="size">
                <Text>SIZE:</Text>
                <div className="box-size">
                  {data.size.map((size, i) => (
                    <SizeBox key={i}>{size}</SizeBox>
                  ))}
                </div>
              </div>
              <div className="color">
                <Text>COLOR:</Text>
                <div className="box-color">
                  {data.color.map((color, i) => (
                    <SizeBox key={i}>{color}</SizeBox>
                  ))}
                </div>
              </div>
              <Text>PRICE:</Text>
              <Text>${data.price.toFixed(2)}</Text>
              <Button title="Add to Cart" />
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
