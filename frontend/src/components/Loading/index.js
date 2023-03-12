import React from "react";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import useStyles from "./styles";

const Loading = ({ text, circle, center, att={}, showText=true }) => {
  const classes = useStyles();
  return (
    <Box
      className={classes.textLoading}
      sx={{
        top: "50%",
        left: "50%",
        transform: center ? "translate(-50%, -50%)": "intial",
        display: showText? 'initial': 'flex',
        justifyContent: 'center',
        position: `${center ? "absolute" : "initial"}`,
        zIndex: 9999,
        ...att
      }}
    >
      {circle ? (
        <CircularProgress size={30} style={{ color: "#E98100" }} />
      ) : (
        <div />
      )}
      {
        showText && (
          <Typography variant="body1" style={{ fontWeight: 600 }}>
            {text}
          </Typography>
        )
      }
    </Box>
  );
};

export default Loading;
