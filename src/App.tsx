import React, { useEffect } from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";
import { IAuthSlice, syncAuth } from "./redux/slices/auth";
import ProfilePage from "./pages/profile/profile-page";
import EditProfilePage from "./pages/profile/edit/edit-profile-page";
import LogoutPage from "./pages/logout/logout-page";
import Layout from "./components/layout/layout";

import CustomThemeProvider from "./modules/contexts/theme/theme.context";

import "./App.css";
import { fetchCurrentUser } from "./redux/slices/user/user-thunks";
import { fetchTimelinePosts } from "./redux/slices/post/post-thunks";
import { RootState } from "./redux/store";
import { SnackbarProvider } from "notistack";
import { fetchReceivedRequests } from "./redux/slices/requests/requests-thunks";

function App() {
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  const token = state.user.token;
  const dispatch = useDispatch();

  useEffect(() => {
    const userLogin = async () => {
      if (token !== null && token !== "") {
        const response: any = await dispatch(fetchCurrentUser());
        if (response.type !== "user/fetchCurrentUser/rejected" && response.payload.status === 200) {
          dispatch(syncAuth({isAuthenticated: true, token}));
          await dispatch(fetchTimelinePosts());
          await dispatch(fetchReceivedRequests());
        }
        else {
          dispatch(syncAuth({isAuthenticated: false}));
          localStorage.removeItem("token");
          
        }
      } else {
        dispatch(syncAuth({ isAuthenticated: false }));
        localStorage.removeItem("token");
      }
    }
    userLogin();
  }, [dispatch, token])


  if (token === null || token === "") {
    return (
      <CustomThemeProvider>
        <AuthActionProvider>
          <AuthPage />
        </AuthActionProvider>
      </CustomThemeProvider>
    )
  }

  return (
    <SnackbarProvider
      anchorOrigin={{
        horizontal: "right",
        vertical: "top",
      }}
    >
      <CustomThemeProvider>
        <div className="content">
          <Router>
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
                    <Route path="/logout">
                      <LogoutPage />
                    </Route>
                  </Switch>
                </Layout>
                <SearchModal />
              </div>
          </Router>
        </div>
      </CustomThemeProvider>
    </SnackbarProvider>
  );
}

export default App;
