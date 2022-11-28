import { makeStyles } from "@mui/styles";

export default makeStyles({
  featureBox: {
    textAlign: "center",
    "& svg": {
      fontSize: 64
    },
    "& .featureName": {
      fontWeight: 600,
    },
    "&:hover": {
      backgroundColor: "var(--bg-gray-color)"
    }
  },
});
