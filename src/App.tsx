import React from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";
import { IAuthSlice } from "./redux/slices/auth";
import { RootState } from "./redux/store";
import ProfilePage from "./pages/profile/profile-page";
import EditProfilePage from "./pages/profile/edit/edit-profile-page";
import Layout from "./components/layout/layout";

import CustomThemeProvider from "./modules/contexts/theme/theme.context";

function App() {
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  return (
    <CustomThemeProvider>
      <div className="content">
        <Router>
          {state.isAuthenticated ? (
            <div className="page">
              <Layout>
                <Switch>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/profile/:username">
                    <ProfilePage />
                  </Route>
                  <Route path="/profile/:username/edit">
                    <EditProfilePage />
                  </Route>
                </Switch>
              </Layout>
              <SearchModal />
            </div>
          ) : (
            <AuthActionProvider>
              <AuthPage />
            </AuthActionProvider>
          )}
        </Router>
      </div>
    </CustomThemeProvider>
  );
}

export default App;
