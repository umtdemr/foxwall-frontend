import React from "react";

import { Alert, Box, Snackbar } from "@mui/material";
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
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        autoHideDuration={5000}
        open={state.message.show}
        onClose={handleSnackBarClose}
      >
        <Alert onClose={handleSnackBarClose} severity={state.message.severity} sx={{ width: '100%' }}>
          {state.message.content}
        </Alert>
      </Snackbar>
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
