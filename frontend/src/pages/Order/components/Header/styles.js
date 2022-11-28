import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  icon: {
    marginBottom: 5,
    marginRight: 5
  },
  background: {
    backgroundColor: "#121212 !important"
  },
  cancelButton: {
    color: "#fff !important",
    height: 'fit-content',
    marginLeft: 'auto !important'
  },
  leftToggerContent: {

  },
  link: {
    color: "#fff",
    textDecoration: 'none',
    cursor: 'pointer'
  },
  drawer: {
    "& .MuiPaper-root": {
      backgroundColor: "#121212",
      minWidth: 200
    }
  }
}))