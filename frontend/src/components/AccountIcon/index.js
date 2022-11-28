import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, Typography, MenuItem, Avatar, IconButton } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import { setUser } from "../../services/actions/userAction";

export default function AccountIcon() {
  const nav = useNavigate();
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const [showUserOption, setShowUserOption] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const opendLoginForm = () => {
    nav("/login");
  };

  const opendRegisterForm = () => {
    nav("/register");
  };

  const clickLogout = () => {
    dispatch(
      setUser({
        token: null,
        phone: null,
        first_name: null,
        email: null,
      })
    );
    localStorage.removeItem("user");
    nav("/login");
  };

  console.log(user);

  const userOptions = [
    {
      label: "Đăng nhập",
      event: opendLoginForm,
      icon: <PersonIcon className={classes.icon} />,
      hidden: user ? true : false,
    },
    {
      label: "Đăng ký",
      event: opendRegisterForm,
      icon: <PersonAddIcon className={classes.icon} />,
      hidden: user ? false : true,
    },
    {
      label: "Đăng xuất",
      event: clickLogout,
      icon: <LogoutIcon className={classes.icon} />,
      hidden: user ? false : true,
    },
  ];

  const handleOpenUserMenu = (e) => {
    setAnchorEl(e.currentTarget);
    setShowUserOption(true);
  };

  return (
    <>
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt={user?.first_name}/>
      </IconButton>
      <Menu
        open={showUserOption}
        onClose={() => setShowUserOption(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        anchorEl={anchorEl}
      >
        {userOptions
          .filter((option) => !option.hidden)
          .map((option, index) => (
            <MenuItem
              key={index}
              onClick={option.event}
              sx={{ padding: option.hidden ? 0 : "auto" }}
            >
              {!option.hidden && (
                <>
                  {option.icon}
                  <Typography>{option.label}</Typography>
                </>
              )}
            </MenuItem>
          ))}
      </Menu>
    </>
  );
}
