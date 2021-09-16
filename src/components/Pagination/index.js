import React from "react";
import styled from "styled-components";
import { Box, Text } from "components";

const PaginationDiv = styled.div`
  display: flex;
  .step {
    min-width: 24px;
    min-height: 24px;
    border: 1px solid #484848;
    border-radius: 4px;
    margin-left: 5px;
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    :hover {
      background-color: #4f75c2;
      p {
        color: white;
      }
    }
  }
  .step.singleStep {
    min-width: 84px;
  }
  .activeStep {
    background-color: #204080;
    p {
      color: white;
    }
  }
`;
const Pagination = ({ pageCount, page, onChange, ...props }) => {
  pageCount = parseInt(pageCount);
  page = parseInt(page);
  const paginationIndexes = () => {
    let pageIndex = [];
    let half = Math.ceil(pageCount / 2);
    for (let i = 1; i <= pageCount; i++) {
      if (
        i == 1 ||
        i == pageCount ||
        (page < half
          ? (page <= i && page + 1 >= i) ||
            (page == 1 && i <= 3) ||
            pageCount <= i + 2
          : (page <= i && page + 1 >= i) ||
            (page + 1 >= pageCount && i + 2 >= pageCount) ||
            3 >= i)
      ) {
        pageIndex.push(i);
      }
    }
    let firstHalf = pageIndex.slice(0, Math.ceil(pageIndex.length / 2));
    let lastHalf = pageIndex.slice(
      Math.ceil(pageIndex.length / 2, pageIndex.length)
    );
    return (
      <Box display="flex" alignItems="flex-end">
        {firstHalf.map((pi) => {
          return (
            <Box
              key={pi}
              className={page == pi ? "step activeStep" : "step"}
              onClick={() => onChange(pi)}
            >
              <Text textAlign="center" variant="subtitle1" color="gray">
                {pi}
              </Text>
            </Box>
          );
        })}
        {pageIndex.length >= 6 ? (
          <Text textAlign="center" variant="subtitle1" color="gray" mx="5px">
            ...
          </Text>
        ) : (
          ""
        )}
        {lastHalf.map((pi) => {
          return (
            <Box
              key={pi}
              className={page == pi ? "step activeStep" : "step"}
              onClick={() => onChange(pi)}
            >
              <Text textAlign="center" variant="subtitle1" color="gray">
                {pi}
              </Text>
            </Box>
          );
        })}
      </Box>
    );
  };
  return (
    <PaginationDiv {...props}>
      {!(page <= 1) && (
        <Box
          className="step singleStep"
          onClick={() => onChange(parseInt(page) - 1)}
        >
          <Text textAlign="center" variant="subtitle1" color="gray">
            Previous
          </Text>
        </Box>
      )}
      {paginationIndexes()}
      {!(page >= pageCount) && (
        <Box
          className="step singleStep"
          onClick={() => onChange(parseInt(page) + 1)}
        >
          <Text textAlign="center" variant="subtitle1" color="gray">
            Next
          </Text>
        </Box>
      )}
    </PaginationDiv>
  );
};
export default Pagination;
