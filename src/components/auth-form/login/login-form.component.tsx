import React from "react";

import { Button, TextField } from "@mui/material";

import "../form.css";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { authActionTypes } from "../../../types/auth/auth-types";

const LoginForm: React.FC = () => {
  const { changeType } = React.useContext(AuthActionContext);
  return (
    <form>
      <TextField className="form_field full" label="email" />
      <TextField className="form_field full" label="password" />
      <Button variant="outlined">Login</Button>
      <span className="form_have_not_text">
        Don't you have an account?
        <button onClick={() => changeType!(authActionTypes.REGISTER)}>
          Sign up.
        </button>
      </span>
    </form>
  );
};

export default LoginForm;
