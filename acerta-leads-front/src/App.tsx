import React from 'react';
import GlobalStyle from './styles/global';
import AppRoutes from './routes/routes';
import { AppProvider } from './context/AppContext';
import Header from './components/header/Header';

const App: React.FC = () => (
  <AppProvider>
    <GlobalStyle />
    <Header />
    <AppRoutes />
  </AppProvider>
);

export default App;
