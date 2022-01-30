import React from "react";

import { Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import "../form.css";
import { authActionTypes } from "../../../types/auth/auth-types";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { registerThunk } from "../../../redux/slices/auth/auth-thunks";

import * as yup from "yup";
import TextFieldFormik from "../../text-formik-field/text-formik-field.component";


const validationSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(2)
    .max(40),
  email: yup
    .string()
    .required()
    .email(),
  password: yup
    .string()
    .required()
    .min(8),
});


const RegisterForm: React.FC = () => {
  const { changeType } = React.useContext(AuthActionContext);
  const theme = useTheme();
  const dispatch = useDispatch();

  return (
    <div>
      <Formik 
        initialValues={{ 
          name: '',
          email: '',
          username: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={async (data, {setSubmitting}) => {
          setSubmitting(true);
        
          const response: any = await dispatch(registerThunk({
            email: data.email,
            username: data.username,
            name: data.name,
            password: data.password,
          }));

          if (response.type === "auth/postRegister/fulfilled") {
            changeType!(authActionTypes.LOGIN);
          }
          setSubmitting(false);
        }
      }>
        { ({
          values,
          isSubmitting,
        }) => (
          <Form>
            <TextFieldFormik
              name="name"
              className="form_field full" 
              type="input"
              placeholder="Name"
            />
            <TextFieldFormik 
              name="email"
              placeholder="Email"
              className="form_field full" 
              type="mail"
            />
            <TextFieldFormik 
              name="username"
              placeholder="Username"
              className="form_field full" 
              type="input"
            />
            <TextFieldFormik
              name="password"
              placeholder="Password"
              className="form_field full" 
              type="password"
            />
            <Button variant="outlined" type="submit" disabled={isSubmitting}>Sign up</Button>
          </Form>
        )}
      </Formik>
      <span className="form_have_not_text" style={{color: theme.palette.text.primary}}>
        Do you have an account?
        <button onClick={() => changeType!(authActionTypes.LOGIN)}>
          Sign in.
        </button>
      </span>
    </div>
  );
};

export default RegisterForm;
