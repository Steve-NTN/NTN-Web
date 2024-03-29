import React from "react";
import { Box, Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";

const Loading = ({ text, circle, center, att = {}, showText = true }) => {
  return (
    <Box
      sx={{
        top: "50%",
        left: "50%",
        textAlign: "center",
        transform: center ? "translate(-50%, -50%)" : "intial",
        display: showText ? "initial" : "flex",
        justifyContent: "center",
        position: `${center ? "absolute" : "initial"}`,
        zIndex: 9999,
        ...att,
      }}
    >
      {circle ? (
        <CircularProgress size={30} style={{ color: "#E98100" }} />
      ) : (
        <div />
      )}
      {showText && (
        <Typography variant="body1" style={{ fontWeight: 600 }}>
          {text}
        </Typography>
      )}
    </Box>
  );
};

export default Loading;
