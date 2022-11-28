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
  },
});

export default theme;
