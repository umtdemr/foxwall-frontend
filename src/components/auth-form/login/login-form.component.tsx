import React from "react";

import { Button, TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { loginThunk } from "../../../redux/slices/auth/auth-thunks";

import "../form.css";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { authActionTypes } from "../../../types/auth/auth-types";

const LoginForm: React.FC = () => {
  const { changeType } = React.useContext(AuthActionContext);
  const theme = useTheme();
  const dispatch = useDispatch();
  
  const hanleLogin = () => {
    dispatch(loginThunk({
      email: "test@test.com",
      password: "test123test",
    }));
  }

  return (
    <form>
      <TextField className="form_field full" label="email" />
      <TextField className="form_field full" label="password" />
      <Button variant="outlined" onClick={() => hanleLogin()}>Login</Button>
      <span className="form_have_not_text" style={{color: theme.palette.text.primary}}>
        Don't you have an account?
        <button onClick={() => changeType!(authActionTypes.REGISTER)}>
          Sign up.
        </button>
      </span>
    </form>
  );
};

export default LoginForm;
