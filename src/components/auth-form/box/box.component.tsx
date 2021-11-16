import React from "react";

import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { authActionTypes } from "../../../types/auth/auth-types";
import LoginForm from "../login/login-form.component";
import RegisterForm from "../register/register-form.component";

interface FormBoxProps {
  type: authActionTypes;
}

const FormBox: React.FC<FormBoxProps> = ({ type }) => {
  const theme = useTheme();
  return (
    <Box mt={5} className="form_box"
      sx={{
        bgcolor: theme.palette.background.default
      }}
    
    >
      {type === authActionTypes.LOGIN && <LoginForm />}
      {type === authActionTypes.REGISTER && <RegisterForm />}
    </Box>
  );
};

export default FormBox;
