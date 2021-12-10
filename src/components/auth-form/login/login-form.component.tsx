import React from "react";

import { Button, TextField } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { loginThunk } from "../../../redux/slices/auth/auth-thunks";

import "../form.css";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { authActionTypes } from "../../../types/auth/auth-types";
import { IAuthSlice } from "../../../redux/slices/auth";
import { RootState } from "../../../redux/store";
import { Formik, Form } from "formik";
import * as yup from "yup";
import TextFieldFormik from "../text-formik-field/text-formik-field.component";


const loginValidationSchema = yup.object({
  authID: yup
    .string()
    .required("email or username is required")
    .min(5, "this field's length must be greater than 5"),
  password: yup.string().required().min(8),
});


const LoginForm: React.FC = () => {
  const { changeType } = React.useContext(AuthActionContext);
  const auth_state: IAuthSlice = useSelector((state: RootState) => state.auth);
  const theme = useTheme();
  const dispatch = useDispatch();
  
  const hanleLogin = () => {
    
  }

  return (
    <div>
      <Formik
        initialValues={{
          authID: '',
          password: '',
        }}
        validationSchema={loginValidationSchema}
        onSubmit={ async (data, { setSubmitting }) => {
          setSubmitting(true);
          
          await dispatch(loginThunk({
            email: data.authID,
            password: data.password,
          }));

        }}
      >
        {({
          values,
          isSubmitting,
        }) => (
          <Form>
            <TextFieldFormik
              className="form_field full"
              placeholder="Email or Username"
              name="authID"
            />
            <TextFieldFormik
              className="form_field full"
              placeholder="Password"
              name="password"
              type="password"
            />
            <Button variant="outlined" type="submit" disabled={isSubmitting}>
              LOGIN
            </Button>
          </Form>
        )}

      </Formik>
      <span className="form_have_not_text" style={{color: theme.palette.text.primary}}>
        Don't you have an account?
        <button onClick={() => changeType!(authActionTypes.REGISTER)}>
          Sign up.
        </button>
      </span>
    </div>
  );
};

export default LoginForm;
