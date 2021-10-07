import React, { useState } from 'react';

import { Box, Stack, Button } from "@mui/material";

import { authActionTypes } from "../../types/auth/auth-types";

import "./style.css"
import FormBox from '../../components/form/box/box.component';

const AuthPage: React.FC = () => {
  const [authTyped, setAuthTyped] = useState<authActionTypes>(authActionTypes.EMPTY);
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
          {authTyped === "" ? (
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button variant="outlined" onClick={() => setAuthTyped(authActionTypes.LOGIN)}>Giriş Yap</Button>
              <Button variant="outlined" onClick={() => setAuthTyped(authActionTypes.REGISTER)} color="secondary">Kayıt Ol</Button>
            </Stack>
          ) : ""}
          <FormBox type={authTyped} />
          <Box mt={5} className="form_box">
          </Box>
        </div>
      </div>
    </div>
  )
}


export default AuthPage;