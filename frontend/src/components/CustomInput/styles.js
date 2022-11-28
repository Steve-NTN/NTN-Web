
import { makeStyles } from "@mui/styles";

export default makeStyles((theme) => ({
  textField: {
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        border: "1px solid #E0E0E0"
      },
    },
    "& .MuiInputBase-root:hover": {
      border: "initial"
    },
    "& .MuiInputLabel-root": {
      // color: "#000 !important"
    },
    // '& span': {
    //   display: 'none'
    // },
    "& .MuiInputBase-input": {
      height: "initial"
    },
    '& input, .MuiSelect-select': {
      padding: '10px 14px'
    },
    "& input, textarea, textarea::placeholder": {
      fontSize: 12,
      [theme.breakpoints.up("md")]: {
        fontSize: "1rem"
      }
    },
    "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
      "-webkit-appearance": "none", 
      margin: 0
    },
    '& input[type=number]': {
      "-moz-appearance": "textfield"
    }
  },
}))