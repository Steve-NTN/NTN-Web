import {
  Box,
  Grid,
  InputAdornment,
  Typography,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import useStyles from "./styles";
import CustomInput from "../../../../components/CustomInput";
import CustomButton from "../../../../components/CustomButton";
import { Link, useNavigate } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import KeyIcon from "@mui/icons-material/Key";
import apiTemplate from "../../../../services/api";

const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();

  const [account, setAccount] = useState({
    username: null,
    password: null,
  });

  const submitForm = (e) => {
    e.preventDefault();
    apiTemplate(
      "/api-token-auth/",
      "POST",
      account,
      (res) => {
        localStorage.setItem("user", JSON.stringify(res));

        if (res.token) {
          nav("/");
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <Box className={classes.loginBox}>
      <Typography variant="h4" align="center">
        Đăng nhập
      </Typography>
      <Box className={classes.loginFormBg}>
        <Box
          className={classes.loginForm}
          component="form"
          onSubmit={submitForm}
        >
          <Box>
            <Grid item container>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography variant="body1" align="center">
                  <PersonIcon className={classes.icon} />
                  Tài khoản
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput
                  width="100%"
                  getValue={(value) =>
                    setAccount({ ...account, username: value })
                  }
                  required={true}
                />
              </Grid>
            </Grid>

            <Grid item container sx={{ marginTop: 2 }}>
              <Grid item xs={4} className={classes.centerBox}>
                <Typography>
                  <KeyIcon className={classes.icon} />
                  Mật khẩu
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <CustomInput
                  width="100%"
                  getValue={(value) =>
                    setAccount({ ...account, password: value })
                  }
                  type={showPassword ? "text" : "password"}
                  required={true}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={() => setShowPassword(!showPassword)}
                          onMouseDown={() => setShowPassword(false)}
                        >
                          {showPassword ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>

            <Box mt={4} className={classes.centerBox}>
              <span>
                {" "}
                <CustomButton
                  text="Đăng nhập"
                  padding="8px 16px"
                  type="submit"
                />
              </span>
            </Box>

            <Box my={2}>
              <Typography align="center">
                Chưa có tài khoản,
                <Link to="/register"> đăng kí? </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default LoginForm;
