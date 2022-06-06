import styled from "styled-components";

export const colors = {
  primary: "#5ECE7B",
  black: "#1D1F22",
  white: "#fff",
  grey: "#D3D2D5",
  grey_2: "#8D8F9A",
  secondaryGrey: "#EEEEEE",
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
  max-width: ${({ mw }) => `${mw}%`};
  margin-right: ${({ mr }) => `${mr}px`};
  margin-left: ${({ ml }) => `${ml}px`};
  margin-top: ${({ mt }) => `${mt}px`};
  margin-bottom: ${({ mb }) => `${mb}px`};
  padding-right: ${({ pr }) => `${pr}px`};
  padding-left: ${({ pl }) => `${pl}px`};
  padding-top: ${({ pt }) => `${pt}px`};
  padding-bottom: ${({ pb }) => `${pb}px`};
  display: ${({ inline }) => (inline ? "inline" : "block")};
  line-height: ${({ lh }) => `${lh ? lh : 25.6}px`};
  cursor: default;
  color: ${({ color, active }) =>
    `${color ? colors[color] : active ? colors["primary"] : colors["black"]} `};
  font-size: ${({ size }) => `${size ? size : 16}px`};
  font-weight: ${({ fw }) => ` ${fw ? fontSize[fw] : fontSize["normal"]}`};
`;
