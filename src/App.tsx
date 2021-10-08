import React from 'react';
import { AuthActionProvider } from './modules/contexts/auth/auth.context';
import AuthPage from './pages/auth/auth-page';


function App() {
  return (
    <AuthActionProvider>
      <AuthPage />
    </AuthActionProvider>
  );
}

export default App;
