import React from "react";
import Box from "../Box";
import { Theme } from "../";
import { css } from "styled-components";
import { compose, variant } from "styled-system";

const textStyle = variant({
  scale: "textStyles",
  variants: { ...Theme.textStyles },
});

const styles = css`
  ${compose(textStyle)}
`;
const Text = ({ ...props }) => {
  return <Box as="p" m="0px" p="0px" css={styles} {...props} />;
};

export default Text;
