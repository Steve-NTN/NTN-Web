import { makeStyles } from "@mui/styles";

export default makeStyles({
  main: {
    width: "100%"
  },
  content: {
    backgroundColor: "var(--bg-gray-color)",
    color: (props) => props?.color,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .logoText": {
      cursor: "pointer",
      fontWeight: 600
    }
  },
});
