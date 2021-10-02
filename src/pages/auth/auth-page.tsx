import React, { useState } from 'react';

import { Box, Stack, Button } from "@mui/material";

import LoginForm from '../../components/form/login/login-form.component';
import RegisterForm from '../../components/form/register/register-form.component';

import "./style.css"


const AuthPage: React.FC = () => {
  const [authTyped, setAuthTyped] = useState<string>("");
  return (
    <div className="home no-login">
      <div className="left">
        <div className="text-centerr">
          <ul>
            <li>Etkileşim içinde ol</li>
            <li>Gündemi kaçırma</li>
            <li>Dünyayı takip et</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="text-centerr" style={{ width: "80%" }}>
          <h4 style={{ textAlign: "center" }}>Dünyada neler dönüyor?</h4>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="outlined" onClick={() => setAuthTyped("login")}>Giriş Yap</Button>
            <Button variant="outlined" onClick={() => setAuthTyped("register")} color="secondary">Kayıt Ol</Button>
          </Stack>
          <Box mt={5} className="form_box">
          </Box>
        </div>
      </div>
    </div>
  )
}


export default AuthPage;