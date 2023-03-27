import React from "react";
import { Box, Typography } from "@mui/material";

import useStyles from "./styles";
import { AccountIcon } from "../../components";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const classes = useStyles;
  const nav = useNavigate();

  const handleClickHome = () => {
    nav("/");
  };

  return (
    <Box sx={classes.main}>
      <Box sx={classes.content} px={2} py={1}>
        <Typography className="logoText" onClick={handleClickHome}>
          NTN Web
        </Typography>

        <Box>
          <AccountIcon />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
