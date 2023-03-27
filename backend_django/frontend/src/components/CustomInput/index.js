import React from "react";
import { MenuItem, TextField } from "@mui/material";

export default function CustomInput(props) {
  const classes = {
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
        // [theme.breakpoints.up("md")]: {
        //   fontSize: "1rem"
        // }
      },
      "& input::-webkit-outer-spin-button, input::-webkit-inner-spin-button": {
        "-webkit-appearance": "none", 
        margin: 0
      },
      '& input[type=number]': {
        "-moz-appearance": "textfield"
      }
    },
  };

  return (
    <TextField
      className={classes.textField}
      fullWidth
      variant={props?.variant || "outlined"}
      size={props?.size || "normal"}
      {...props}
      InputLabelProps={{ shrink: props?.shrink || false }}
      sx={{
        ...props?.att,
        "& fieldset": { top: props?.variant ? 0 : -5 },
      }}
      SelectProps={{
        MenuProps: {
          PaperProps: { sx: { maxHeight: props?.maxMenuHeight || 350 } },
        },
      }}
    >
      {(props?.items || [])?.map((item, index) => (
        <MenuItem
          key={index}
          value={item?.value}
          sx={{ display: item?.hidden && "none" }}
        >
          {item?.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
