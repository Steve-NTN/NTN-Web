import { makeStyles } from "@mui/styles";

export default makeStyles({
  content: {
    height: "calc(100vh - 56px)",
  },
  bottomBox: {
    position: "fixed",
    bottom: "0",
    width: "100%",
  },
  pressMesBox: {
    display: "flex"
  },
  imgBox: {
    display: "flex",
    "& img": {
      width: 200,
      height: 200,
      objectFit: "cover"
    }
  }
});
