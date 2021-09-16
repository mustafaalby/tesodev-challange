import styled from "styled-components";
import {
  space,
  layout,
  color,
  typography,
  flexbox,
  position,
  borderRadius,
  border,
} from "styled-system";
const Box = styled.div(
  {
    boxSizing: "border-box",
    minWidth: 0,
  },
  space,
  layout,
  color,
  typography,
  flexbox,
  border,
  borderRadius,
  position
);
export default Box;