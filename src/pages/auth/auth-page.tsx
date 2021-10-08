import React, { useState, useContext } from 'react';

import { Stack, Button } from "@mui/material";

import { authActionTypes } from "../../types/auth/auth-types";

import "./style.css"
import FormBox from '../../components/form/box/box.component';
import { AuthActionContext } from '../../modules/contexts/auth/auth.context';

const AuthPage: React.FC = () => {
  const { changeAuthActionType, authTyped } = useContext(AuthActionContext)!;

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
              <Button variant="outlined" onClick={() => changeAuthActionType(authActionTypes.LOGIN)}>Giriş Yap</Button>
              <Button variant="outlined" onClick={() => changeAuthActionType(authActionTypes.REGISTER)} color="secondary">Kayıt Ol</Button>
            </Stack>
          ) : ""}
          {
            authTyped !==authActionTypes.EMPTY && <FormBox type={authTyped} />
          }
        </div>
      </div>
    </div>
  )
}


export default AuthPage;