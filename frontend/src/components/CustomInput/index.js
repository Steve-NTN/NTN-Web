import React from "react";
import { MenuItem, TextField } from "@mui/material";
import useStyles from "./styles";

export default function CustomInput(props) {
  const classes = useStyles();

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
