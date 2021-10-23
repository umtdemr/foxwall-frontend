import React from "react";
import SearchModal from "./components/search-modal/search-modal.component";
import { AuthActionProvider } from "./modules/contexts/auth/auth.context";
import AuthPage from "./pages/auth/auth-page";
import HomePage from "./pages/home/home-page";

function App() {
  return (
    // <AuthActionProvider>
    //   <AuthPage />
    // </AuthActionProvider>
    <>
      <HomePage />
      <SearchModal />
    </>
  );
}

export default App;
