import React, { useEffect, useState } from "react";
import { Box, Text, Dropdown, Pagination } from "components";
import { SearchBar, ListBox } from "./components";
import { filterAndSort } from "context";
import { stringify } from "query-string";
const List = ({ result, keyword, sortBy, orderBy, page }) => {
  const [isDropdownActive, setDropdownActive] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState(keyword);
  const [searchPage, setSearchPage] = useState(page);

  const sortingCriterias = [
    { text: "Name ascending", sortBy: "NameSurname", orderBy: 1 },
    { text: "Name descending", sortBy: "NameSurname", orderBy: 0 },
    { text: "Year ascending", sortBy: "Date", orderBy: 1 },
    { text: "Year descending", sortBy: "Date", orderBy: 0 },
  ];

  const onSubmit = (sortBy, orderBy, page) => {
    let qs = stringify(
      {
        keyword: searchKeyword,
        sortBy,
        orderBy,
        page,
      },
      { skipEmptyString: true, skipNull: true }
    );

    window.location = `/list?${qs}`;
  };

  useEffect(() => {
    if (searchPage != page) {
      let qs = stringify(
        {
          keyword: searchKeyword,
          sortBy,
          orderBy,
          page: searchPage,
        },
        { skipEmptyString: true, skipNull: true }
      );

      window.location = `/list?${qs}`;
    }
  }, [searchPage]);
  return (
    <Box
      px={{ _: "8px", lg: "38px" }}
      py={{ _: "8px", lg: "27px" }}
      maxWidth="1200px"
    >
      <SearchBar
        mb="40px"
        keyword={searchKeyword}
        setKeyword={setSearchKeyword}
        onSubmit={onSubmit}
      />
      <Box mr="24px">
        <Box display="flex" justifyContent="flex-end">
          <Box
            display="flex"
            alignItems="center"
            position="relative"
            onClick={() => setDropdownActive(true)}
            css={`
              cursor: pointer;
            `}
          >
            <Box src="\images\doubleArrow.png" as="img" mr="8px" />
            <Text variant="subtitle2" color="gray">
              Order By
            </Text>
            <Dropdown
              isActive={isDropdownActive}
              setActive={setDropdownActive}
              position="absolute"
              top="28px"
              left="68px"
              width="max-content"
            >
              <Box border="1px solid #484848" p="10px 8px" borderRadius="4px">
                {sortingCriterias.map((sc, i) => {
                  return (
                    <Text
                      key={i}
                      variant="subtitle1"
                      color="black"
                      p="4px 8px"
                      borderRadius="4px"
                      onClick={() => onSubmit(sc.sortBy, sc.orderBy)}
                      css={`
                        &:hover {
                          color: white;
                          background-color: #c4c4c4;
                        }
                      `}
                    >
                      {sc.text}
                    </Text>
                  );
                })}
              </Box>
            </Dropdown>
          </Box>
        </Box>
        <ListBox list={result.list} pl={{ _: "8px", lg: "180px" }} />
        <Box
          display="flex"
          justifyContent="center"
          pl={{ _: "8px", lg: "180px" }}
        >
          <Pagination
            page={page}
            pageCount={result.pageCount}
            onChange={setSearchPage}
          />
        </Box>
      </Box>
    </Box>
  );
};
List.getInitialProps = async ({ query }) => {
  const keyword = query.keyword || "";
  const page = query.page || 1;
  const sortBy = query.sortBy || "";
  const orderBy = query.orderBy;

  let result = filterAndSort(keyword, sortBy, orderBy, page);

  return { result, keyword, sortBy, orderBy, page };
};
export default List;
