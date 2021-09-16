import React from "react";
import { Box, Theme } from "components";
import { css } from "styled-components";
import { compose, variant } from "styled-system";

const buttonVar = variant({
  scale: "buttons",
  variants: { ...Theme.buttons },
});

const buttonSizeVar = variant({
  prop: "buttonSize",
  scale: "buttonSizeVar",
  variants: { ...Theme.buttonSizes },
});
const styles = css`
  ${compose(buttonVar, buttonSizeVar)}
  color: ${(props) => Theme.colors[`${props.color}`]};
  background-color: ${(props) => Theme.colors[`${props.bg}`]};
  border-radius: 8px;
  border: none;
  outline: none;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #4f75c2;
  }
`;
const Button = ({ ...props }) => {
  return <Box variant="primary" css={styles} {...props}></Box>;
};

Button.defaultProps = {
  as: "button",
};

export default Button;
