import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";

import SendIcon from "@mui/icons-material/Send";

// import the socket
import { io } from "socket.io-client";
import { CustomInput } from "../../../../components";
import useStyles from "./styles";

// outside of your component, initialize the socket variable
let socket;

const ChatBox = () => {
  const classes = useStyles();

  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState([]);
  const user = { username: "12232323" };

  useEffect(() => {
    // create websocket/connect
    socket = io();

    // listen for chat events
    socket.on("chat", (chat) => {
      // when we recieve a chat, add it into our messages array in state
      setMessages((messages) => [...messages, chat]);
    });

    // when component unmounts, disconnect
    return () => {
      socket.disconnect();
    };
  }, []);

  const updateChatInput = (e) => {
    setChatInput(e.target.value);
  };

  const sendChat = (e) => {
    e.preventDefault();
    socket.emit("chat", { user: user.username, msg: chatInput });
    setChatInput("");
  };

  return (
    <div>
      <Box p={2}>
        {messages.map((message, ind) => (
          <div key={ind}>{`${message.user}: ${message.msg}`}</div>
        ))}
      </Box>
      <Box className={classes.bottomBox}>
        <form onSubmit={sendChat}>
          <Box p={2} className={classes.pressMesBox}>
            <CustomInput
              value={chatInput}
              onChange={updateChatInput}
              multiline
              rows={1}
            />
            <Button
              type="submit"
              sx={{ ml: 2 }}
              variant="contained"
              endIcon={<SendIcon />}
            >
              Send
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
};

export default ChatBox;
