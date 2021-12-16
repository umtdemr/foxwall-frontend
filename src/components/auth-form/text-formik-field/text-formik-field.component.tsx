import React from 'react'

import { TextField } from "@material-ui/core";
import { FieldAttributes, useField } from "formik";
import { useTheme } from '@emotion/react';


const TextFieldFormik: React.FC<FieldAttributes<{}>> = ({placeholder, className, type="text",   ...props }) => {
  const [field, meta] = useField(props);
  const theme: any = useTheme();
  const errorText = meta.error && meta.touched ? meta.error : '';
  return <TextField 
    {...field}
    label={placeholder} 
    className={`${className} ${theme.palette.mode}`}
    helperText={errorText} 
    error={!!errorText}
    type={type}
  />
}


export default TextFieldFormik;