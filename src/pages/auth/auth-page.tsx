import React, { useContext, useEffect } from "react";

import { Stack, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { authActionTypes } from "../../types/auth/auth-types";

import "./style.css";
import FormBox from "../../components/auth-form/box/box.component";
import { AuthActionContext } from "../../modules/contexts/auth/auth.context";

const AuthPage: React.FC = () => {
  const { current_type, changeType } = useContext(AuthActionContext);
  const theme = useTheme();
  
  useEffect(() => {
    if (window.location.pathname !== "/") {
      window.location.pathname = "/";
    }
  }, [])

  return (
    <div className="home no-login">
      <div className="left">
        <div className="text-centerr">
          <ul>
            <li>Don't miss the agenda</li>
            <li>Follow the whole world</li>
          </ul>
        </div>
      </div>
      <div className="right">
        <div className="text-centerr" style={{ width: "80%" }}>
          <h4 style={{ textAlign: "center",  color: theme.palette.text.primary}}>What's happening in the world?</h4>
          {current_type === "" && (
            <Stack spacing={2} direction="row" justifyContent="center">
              <Button
                variant="outlined"
                onClick={() => changeType!(authActionTypes.LOGIN)}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                onClick={() => changeType!(authActionTypes.REGISTER)}
                color="secondary"
              >
                Register
              </Button>
            </Stack>
          )}
          {current_type !== authActionTypes.EMPTY && (
            <FormBox type={current_type} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
