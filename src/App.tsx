import React from 'react';
import { Box, Button, Stack } from "@mui/material"

import LoginForm from './components/form/login/login-form.component';

import "./pages/auth/style.css"
import RegisterForm from './components/form/register/register-form.component';

function App() {
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
        <div className="text-centerr" style={{width: "80%"}}>
          <h4 style={{textAlign: "center"}}>Dünyada neler dönüyor?</h4>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="outlined">Giriş Yap</Button>
            <Button variant="outlined" color="secondary">Kayıt Ol</Button>
          </Stack>

          <Box mt={5} className="form_box">
            <RegisterForm />
          </Box>
        </div>
      </div>
    </div>
  );
}

export default App;
