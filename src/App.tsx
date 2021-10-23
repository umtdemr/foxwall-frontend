import React from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";

function App() {
  return (
    // <AuthActionProvider>
    //   <AuthPage />
    // </AuthActionProvider>
    <div className="content">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
      <SearchModal />
    </div>
  );
}

export default App;
