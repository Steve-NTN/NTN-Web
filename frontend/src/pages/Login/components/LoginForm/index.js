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
import { useDispatch } from "react-redux";
import { setToken } from "../../../../services/reducers/user";
import { checkValidString } from "../../../../helpers";

const LoginForm = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [account, setAccount] = useState({
    username: null,
    password: null,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValidUser = checkValidString(account?.username);
    let isValidPassword = checkValidString(account?.password);
    let isCorrect =
      account?.username === "admin" && account.password === "nghia";

    let tmpErrors = {
      username: {
        error: !isValidUser,
        errorText: isValidUser ? "" : "Vui lòng nhập tên đăng nhập.",
      },
      password: {
        error: !isValidPassword,
        errorText: isValidPassword ? "" : "Vui lòng nhập mật khẩu.",
      },
      main: {
        error: !isCorrect,
        errorText: isCorrect ? "" : "Tên đăng nhập hoặc mật khẩu không đúng.",
      },
    };
    setErrors(tmpErrors);
    return isValidUser && isValidPassword && isCorrect;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (validateForm()) {
      dispatch(setToken("test"));
      nav("/");
    }
  };

  const handleChangeParam = (e, field) => {
    setAccount({ ...account, [field]: e?.target?.value });
  };

  return (
    <Box className={classes.loginBox}>
      <Typography variant="h4" align="center">
        Đăng nhập
      </Typography>
      <Box className={classes.loginFormBg}>
        <Box className={classes.loginForm}>
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
                  value={account.username}
                  onChange={(e) => handleChangeParam(e, "username")}
                  required={true}
                  error={errors?.username?.error}
                  helperText={errors?.username?.errorText}
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
                  error={errors?.password?.error}
                  value={account.password}
                  onChange={(e) => handleChangeParam(e, "password")}
                  helperText={errors?.password?.errorText}
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

            {errors?.main?.error && (
              <Typography
                variant="body2"
                align="center"
                sx={{ color: "var(--text-error-color)", my: 2 }}
              >
                {errors?.main?.errorText}
              </Typography>
            )}

            <Box mt={4} className={classes.centerBox}>
              <span>
                {" "}
                <CustomButton
                  text="Đăng nhập"
                  padding="8px 16px"
                  event={submitForm}
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
