import React from "react";
import { Box, Text } from "components";
const List = ({ list, ...props }) => {
  if (!list || !list.length) {
    return <Box></Box>;
  }
  return (
    <Box {...props}>
      <Box>
        {list.map((l, i) => {
          return (
            <Box
              key={i}
              p="10px"
              mb="24px"
              borderRadius="4px"
              css={`
                &:hover,
                &:hover .reverseColor {
                  background-color: #c4c4c4;
                  cursor: pointer;
                  color: white;
                }
                &:last-child {
                  border: none;
                }
              `}
            >
              <Box
                key={i}
                py={{ _: "8px", lg: "18px" }}
                borderBottom="1px solid #484848"
                display="flex"
                justifyContent="space-between"
              >
                <Box>
                  <Text
                    variant="subtitle2"
                    color="gray"
                    pb="4px"
                  >{`${l.Country} - ${l.City}`}</Text>
                  <Text
                    className="reverseColor"
                    variant="subtitle1"
                    color="gray2"
                  >{`${l.NameSurname} - ${new Date(
                    l.Date
                  ).getFullYear()}`}</Text>
                </Box>
                <Box pr="40px">
                  <Text
                    variant="subtitle2"
                    color="gray"
                    textAlign="right"
                  >{`Email: ${l.Email}`}</Text>
                </Box>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
export default List;
