import React from "react";
import { Box } from "@mui/material";
import { LoginForm } from "./components";
import { Header } from "../../layouts";

const Login = () => {
  return (
    <>
      <Header />
      <Box
        display="flex"
        alignItems={"center"}
        justifyContent="center"
      >
        <LoginForm />
      </Box>
    </>
  );
};

export default Login;
