import React from "react";
import { Box, Text } from "components";
const ListBox = ({ list, canLoadMore, onShowMore, ...props }) => {
  if (!list.length || !list) {
    return <Box></Box>;
  }
  return (
    <Box border="1px solid #484848" borderRadius="8px" {...props}>
      <Box px={{ _: "16px", lg: "32px" }}>
        {list.map((l, i) => {
          return (
            <Box
              key={i}
              py={{ _: "8px", lg: "18px" }}
              borderBottom="1px solid #484848"
              display="flex"
              justifyContent="space-between"
              css={`
                &:last-child {
                  border: none;
                }
              `}
            >
              <Box>
                <Text
                  variant="subtitle2"
                  color="gray"
                  pb="4px"
                >{`${l.Country} - ${l.City}`}</Text>
                <Text variant="subtitle1" color="gray2">{`${
                  l.NameSurname
                } - ${new Date(l.Date).getFullYear()}`}</Text>
              </Box>
              <Box pr="60px">
                <Text
                  variant="subtitle2"
                  color="gray"
                >{`Email: ${l.Email}`}</Text>
              </Box>
            </Box>
          );
        })}
      </Box>
      {canLoadMore && (
        <Box
          onClick={() => onShowMore()}
          css={`
            cursor: pointer;
            text-decoration: none;
          `}
        >
          <Text variant="p4" color="black" textAlign="center" p="8px">
            Show more...
          </Text>
        </Box>
      )}
    </Box>
  );
};
export default ListBox;
