import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { ThemeProvider } from '@mui/material/styles';
import { Provider as StoreProvider} from "react-redux";
import { store, persistor } from './redux/store'
import theme from "./theme/theme"
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme} >
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </StoreProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
