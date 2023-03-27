import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Roboto", "Arial", "sans-serif"].join(","),
    body1: {
      fontSize: 16,
      "@media (min-width: 600px)": {},
    },
    body2: {
      fontSize: 14,
      "@media (min-width: 600px)": {},
    },
  },
  palette: {
    primary: {
      main: "#008934",
    },
    secondary: {
      main: "#f48840",
      underMain1: "#f488403b",
    },
    background: {
      main: "#eeeeee",
    },
  },
});

export default theme;
