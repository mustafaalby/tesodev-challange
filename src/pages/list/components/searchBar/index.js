import React from "react";
import { Box, Input, Button } from "components";
const SearchBar = ({ keyword, setKeyword, onSubmit, ...props }) => {
  return (
    <Box
      display="flex"
      alignItems="center"
      flexDirection={{ _: "column", lg: "row" }}
      {...props}
    >
      <Box
        minWidth="149px"
        height="63px"
        mr="35px"
        src="\images\jpg-1.png"
        as="img"
        onClick={() => (window.location = "/home")}
        css={`
          cursor: pointer;
        `}
      />
      <Input
        width={1}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search to find"
        height="fit-content"
      />
      <Button
        variant="primary"
        buttonSize="medium"
        height="fit-content"
        minWidth="140px"
        ml="16px"
        onClick={() => onSubmit()}
      >
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
