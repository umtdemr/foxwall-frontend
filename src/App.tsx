import React from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";
import { IAuthSlice } from "./redux/slices/auth";
import { RootState } from "./redux/store";
import { Container, Grid } from "@mui/material";
import HeadWithLogo from "./components/head/head-with-logo.component";
import SideBar from "./components/sidebar/sidebar_component";

function App() {
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  return (
    <div className="content">
      <Router>
        {
          state.isAuthenticated ? (
            <div className="page">
              <Container>
                <Grid container justifyContent="center" spacing={2}>
                  <Grid item xs={6}>
                    <HeadWithLogo />
                      <Switch>
                        <Route exact path="/">
                            <HomePage />
                        </Route>
                      </Switch>
                  </Grid>
                  <Grid item xs={4}>
                    <SideBar />
                  </Grid>
                </Grid>
              </Container>
              <SearchModal />
            </div>
          ): (
            <AuthActionProvider>
              <AuthPage />
            </AuthActionProvider>
          )
        }
      </Router>
    </div>
  );
}

export default App;
