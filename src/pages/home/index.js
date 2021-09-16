import React, { useEffect, useState } from "react";
import { Box, Input, Text, Button } from "components";
import { List } from "./components";
import { filter } from "context";
import { stringify } from "query-string";
const Home = ({ keyword, list, canLoadMore }) => {
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  const onShowMore = () => {
    let qs = stringify(
      {
        keyword: searchKeyword,
      },
      { skipEmptyString: true, skipNull: true }
    );

    window.location = `/list?${qs}`;
  };
  return (
    <Box px={{ _: "8px", lg: "210px" }} py={{ _: "32px", lg: "220px" }}>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        pb={{ _: "16px", lg: "42px" }}
      >
        <Box
          width="278px"
          mb="10px"
          height="115px"
          src="\images\jpg-1.png"
          as="img"
        />
        <Text variant="subtitle1" width={1} maxWidth="350px" textAlign="right">
          Search web app
        </Text>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        pb={{ _: "8px", lg: "18px" }}
      >
        <Input
          width={83 / 100}
          placeholder="Search to find"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
        <Button
          variant="primary"
          buttonSize="medium"
          width={15 / 100}
          href={`?keyword=${searchKeyword}`}
          as="a"
        >
          Search
        </Button>
      </Box>
      <Box width={83 / 100}>
        <List list={list} canLoadMore={canLoadMore} onShowMore={onShowMore} />
      </Box>
      <Box width={15 / 100} />
    </Box>
  );
};

Home.getInitialProps = ({ query }) => {
  const keyword = query.keyword || "";

  const result = filter(keyword);

  const list = result.slice(0, 3);
  const canLoadMore = result.length > 3;

  return { keyword, list, canLoadMore };
};

export default Home;
