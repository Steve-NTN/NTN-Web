import React from "react";
import { Typography, Button } from "@mui/material";

export default function CustomButton({
  id,
  text,
  event,
  href,
  submit,
  disable,
  bold=true,
  fullWidth = false,
  background="linear-gradient(269.64deg, #FF872C 0.14%, #FFB52C 94.91%) !important",
  att,
  ...props
}) {
  return (
    <Button
      id={id}
      href={href ? href : null}
      onClick={event}
      fullWidth={fullWidth}
      type={`${submit ? "submit" : "button"}`}
      disabled={!!disable}
      sx={{
        background: background,
        color: "#fff",
        borderRadius: 1,
        textTransform: "initial",
        padding: { xs: `6px 14px`, md: `8px 24px` },
        "&:hover": {
          background: background
        },
        "& p": {
          fontWeight: bold? 600: 100,
        },
        ...att,
      }}
      {...props}
    >
      <Typography>{text}</Typography>
    </Button>
  );
}
