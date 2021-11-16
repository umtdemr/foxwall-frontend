import React from "react";

import { TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import "../form.css";
import { authActionTypes } from "../../../types/auth/auth-types";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";

const RegisterForm: React.FC = () => {
  const { changeType } = React.useContext(AuthActionContext);
  const theme = useTheme();

  return (
    <form>
      <TextField className="form_field full" label="name" />
      <TextField className="form_field full" label="email" />
      <TextField className="form_field full" label="username" />
      <TextField className="form_field full" label="password" />
      <Button variant="outlined">Sign up</Button>
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
