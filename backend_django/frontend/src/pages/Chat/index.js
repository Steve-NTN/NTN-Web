import { Box } from "@mui/material";
import React from "react";

import { Header } from "../../layouts";
import { ChatBox } from "./components";
import useStyles from "./styles";

const Chat = () => {
  const classes = useStyles;
  return (
    <Box>
      <Header />
      <Box className={classes.content}>
        <ChatBox />
      </Box>
    </Box>
  );
};

export default Chat;
