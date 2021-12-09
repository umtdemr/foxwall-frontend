import React, { useState } from "react";

import { TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";

import "../form.css";
import { authActionTypes } from "../../../types/auth/auth-types";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { registerThunk } from "../../../redux/slices/auth/auth-thunks";

const RegisterForm: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const { changeType } = React.useContext(AuthActionContext);
  const theme = useTheme();
  const dispatch = useDispatch();

  const handleRegister = () => {
    dispatch(registerThunk({
      email: "test@test.com",
      password: "test123test",
      name: "test test",
    }));
  }

  return (
    <form>
      <TextField 
        className="form_field full" 
        label="Name" 
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <TextField 
        className="form_field full" 
        label="email" 
        onChange={(e) => setEmail(e.target.value)}
        value={email}
      />
      <TextField 
        className="form_field full" 
        label="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <TextField 
        className="form_field full" 
        label="password" 
        onChange={(e) => setPassword(e.target.value)}
        value={password}
      />
      <Button variant="outlined" onClick={() => handleRegister()}>Sign up</Button>
      <span className="form_have_not_text" style={{color: theme.palette.text.primary}}>
        Do you have an account?
        <button onClick={() => changeType!(authActionTypes.LOGIN)}>
          Sign in.
        </button>
      </span>
    </form>
  );
};

export default RegisterForm;
