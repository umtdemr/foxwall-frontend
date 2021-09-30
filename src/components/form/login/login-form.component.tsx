import React from "react";

import { Button, TextField } from "@mui/material";

import "../form.css";

const LoginForm: React.FC = () => {
    return (
        <form>
            <TextField className="form_field full" label="email"/>
            <TextField className="form_field full" label="password"/>
            <Button variant="outlined">Login</Button> 
            <span className="form_have_not_text">Don't you have an account? Sign up.</span>
            
        </form>
    )
}

export default LoginForm;