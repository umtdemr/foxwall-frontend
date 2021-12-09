import React from "react";

import { Box, Snackbar } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { authActionTypes } from "../../../types/auth/auth-types";
import LoginForm from "../login/login-form.component";
import RegisterForm from "../register/register-form.component";
import { IAuthSlice, removeMessage } from "../../../redux/slices/auth";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

interface FormBoxProps {
  type: authActionTypes;
}

const FormBox: React.FC<FormBoxProps> = ({ type }) => {
  const theme = useTheme();
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleSnackBarClose = () => {
    dispatch(removeMessage());
  }

  return (
    <>
      <Snackbar 
        autoHideDuration={5000}
        message={state.message.content}
        open={state.message.show}
        onClose={handleSnackBarClose}
      />
      <Box mt={5} className="form_box"
        sx={{
          bgcolor: theme.palette.background.default,
        }}
      >
        {type === authActionTypes.LOGIN && <LoginForm />}
        {type === authActionTypes.REGISTER && <RegisterForm />}
      </Box>
    </>
  );
};

export default FormBox;
