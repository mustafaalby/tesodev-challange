import React from "react";
import Box from "../Box";
import { Text } from "components";
import { css } from "styled-components";

const Input = ({ error, ...props }) => {
  const style = css`
    min-height: 2em;
    background: "#FFFFFF";
    border: 2px solid #000000;
    color: rgba(104, 104, 104, 1);
    border-radius: 8px;
    font-size: 18px;
    font-weight: 700;
    padding: 10px 18px 10px 18px;
    &::placeholder {
      color: rgba(100, 100, 100, 0.5);
    }
    ::-ms-input-placeholder {
      /* Microsoft Edge */
      color: rgba(100, 100, 100, 0.5);
    }
    &:focus {
      outline: none;
      background-color: rgba(100, 100, 100, 0.08);
    }

    &:invalid {
      border: 2px solid #ff0000;
      &::placeholder {
        color: rgba(255, 0, 0, 0.5);
      }
      ::-ms-input-placeholder {
        /* Microsoft Edge */
        color: rgba(255, 0, 0, 0.5);
      }
    }
  `;
  return (
    <Box
      {...props}
      css={`
        ${style}
      `}
    >
      {error && (
        <Text
          variant="subtitle2"
          color="rgba(255, 0, 0, 0.5)"
          pt={{ _: "8px", lg: "16px" }}
        >
          {error}
        </Text>
      )}
    </Box>
  );
};
Input.defaultProps = { as: "input" };
export default Input;
