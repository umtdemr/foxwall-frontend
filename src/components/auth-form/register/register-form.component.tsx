import React, { useState } from "react";

import { TextField, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, FieldAttributes, useField } from "formik";

import "../form.css";
import { authActionTypes } from "../../../types/auth/auth-types";
import { AuthActionContext } from "../../../modules/contexts/auth/auth.context";
import { registerThunk } from "../../../redux/slices/auth/auth-thunks";


const TextFieldFormik: React.FC<FieldAttributes<{}>> = ({...props }) => {
  const [field, meta] = useField(props);
  const errorText = meta.error && meta.touched ? meta.error : '';
  return <TextField {...field} helperText={errorText} error/>
}


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
    <div>
      <Formik 
        initialValues={{ 
          name: '',
          email: '',
          username: '',
          password: '',
        }}
        onSubmit={(data, {setSubmitting}) => {
          setSubmitting(true);
          // make some async works here...
          console.log("Submit : ", data);
          setSubmitting(false);
        }
      }>
        { ({
          values,
          isSubmitting,
          handleBlur,
          handleChange,
        }) => (
          <Form>
            <TextFieldFormik
              name="name"
              className="form_field full" 
              type="input"
            />
            <Field
              name="email"
              label="Email"
              className="form_field full" 
              type="mail"
              as={TextField}
            />
            <Field
              name="username"
              label="Username"
              className="form_field full" 
              type="input"
              as={TextField}
            />
            <Field
              name="password"
              label="Password"
              className="form_field full" 
              type="password"
              as={TextField}
            />
            <Button variant="outlined" type="submit" disabled={isSubmitting}>Sign up</Button>
            <pre>
              {
                JSON.stringify(values, null, 2)
              }
            </pre>
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
