import React from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";
import { IAuthSlice } from "./redux/slices/auth";
import { RootState } from "./redux/store";

function App() {
  const state: IAuthSlice = useSelector((state: RootState) => state.auth);
  return (
    <div className="content">
      <Router>
        <Switch>
          <Route exact path="/">
            {state.isAuthenticated ? (
              <HomePage />
            ) : (
              <AuthActionProvider>
                <AuthPage />
              </AuthActionProvider>
            )}
          </Route>
        </Switch>
      </Router>
      <SearchModal />
    </div>
  );
}

export default App;
