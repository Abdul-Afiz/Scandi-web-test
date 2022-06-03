import styled from "styled-components";

export const colors = {
  primary: "#5ECE7B",
  black: "#1D1F22",
  white: "#fff",
  grey: "#D3D2D5",
  secondaryBlack: "#2B2B2B",
  secondaryGreen: "#0F6450",
  lightBlue: "#15A4C3",
  orange: "#EA8120",
};

export const fontSize = {
  thin: 300,
  normal: 400,
  medium: 500,
  bold: 600,
  strong: 700,
};

export const Text = styled.span`
  display: block;
  color: ${({ color, active }) =>
    `${color ? colors[color] : active ? colors["primary"] : colors["black"]} `};
  font-size: ${({ size }) => `${size ? size : 16}px`};
  font-weight: ${({ fw }) => ` ${fw ? fontSize[fw] : 400}`};
`;

export const Heading = styled.span`
  display: block;
  font-size: ${({ category, size }) => `${category ? 42 : size ? size : 30}px`};
  font-weight: ${({ fw }) => ` ${fw ? fontSize[fw] : 400}`};
`;
