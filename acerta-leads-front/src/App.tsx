import React from 'react';
import GlobalStyle from './styles/global';
import AppRoutes from './routes/routes';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => (
  <AppProvider>
    <GlobalStyle />
    <AppRoutes />
  </AppProvider>
);

export default App;
