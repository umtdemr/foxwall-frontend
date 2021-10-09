import React from 'react';
import { AuthActionProvider } from './modules/contexts/auth/auth.context';
import AuthPage from './pages/auth/auth-page';
import HomePage from './pages/home/home-page';


function App() {
  return (
    // <AuthActionProvider>
    //   <AuthPage />
    // </AuthActionProvider>
    <HomePage />
  );
}

export default App;
