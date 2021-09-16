const breakpoints = ["40em", "64em"];

breakpoints.sm = breakpoints[0];
breakpoints.lg = breakpoints[1];

const colors = {
  white: "#ffffff",
  black: "#000000",
  blue: "#0000ff",
  green: "#00FF00",
  red: "#FF0000",
  orange: "#FF8200",
  yellow: "#FFFF00",
  turquoise: "#00FFFF",
  primary: "#204080",
  gray: "#484848",
  gray2: "#686868",
};

const buttons = {
  primary: {
    color: "white",
    bg: "primary",
  },
};

const buttonSizes = {
  medium: {
    padding: "12px 19px",
    fontSize: 18,
    fontWeight: 700,
  },
};

const textStyles = {
  h1: {
    fontSize: 76,
    fontWeight: 100,
  },
  h2: {
    fontSize: 39,
    fontWeight: 300,
  },
  h2v2: {
    fontSize: 52,
    fontWeight: 500,
  },
  h3: {
    fontSize: 32,
    fontWeight: 300,
  },
  p1: { fontSize: 12, fontWeight: 100 },
  p2: { fontSize: 18, fontWeight: 200 },
  p3: {
    fontSize: 24,
    fontWeight: 300,
  },
  p4: {
    fontSize: 12,
    fontWeight: 700,
  },
  subtitle1: {
    fontSize: 14,
    fontWeight: 700,
  },
  subtitle2: {
    fontSize: 18,
    fontWeight: 700,
  },
};

export default { colors, buttons, buttonSizes, breakpoints, textStyles };
