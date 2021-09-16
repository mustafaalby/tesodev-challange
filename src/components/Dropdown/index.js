import React, { useRef, useEffect } from "react";
import { Box } from "components";
const Dropdown = ({ isActive, setActive, children, ...props }) => {
  const useOutsideAlerter = (ref) => {
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setActive(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  };
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <Box
      display={isActive ? "block" : "none"}
      bg="white"
      ref={wrapperRef}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Dropdown;
