import React from 'react';

import { TextField, Button } from '@mui/material';

import "../form.css";

const RegisterForm: React.FC = () => {
    return (
        <form>
            <TextField className="form_field full" label="name"/>
            <TextField className="form_field full" label="email"/>
            <TextField className="form_field full" label="username"/>
            <TextField className="form_field full" label="password"/>
            <Button variant="outlined">Sign up</Button> 
            <span className="form_have_not_text">Do you have an account? Sign in.</span>
        </form>
    )
}


export default RegisterForm;