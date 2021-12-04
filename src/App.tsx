import React, { useEffect } from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";
import { IAuthSlice, syncAuth } from "./redux/slices/auth";
import { RootState } from "./redux/store";
import ProfilePage from "./pages/profile/profile-page";
import EditProfilePage from "./pages/profile/edit/edit-profile-page";
import Layout from "./components/layout/layout";

import CustomThemeProvider from "./modules/contexts/theme/theme.context";

import "./App.css";
import { fetchCurrentUser } from "./redux/slices/user/user-thunks";

function App() {
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogin = async () => {
      const token = localStorage.getItem("token");
  
      if (token != null) {
        const response: any = await dispatch(fetchCurrentUser());
        if (response.payload.status === 200) {
          dispatch(syncAuth({isAuthenticated: true, token: token}));
        } else {
          dispatch(syncAuth({isAuthenticated: false}));
        }
      }
    }
    userLogin();
  }, [dispatch])

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
