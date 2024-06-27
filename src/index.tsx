import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';

import { store } from './app/store.ts';
import AppShell from './components/AppShell.tsx';
import ThemeProvider from './features/theme/ThemeProvider';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ThemeProvider>
        <AppShell/>
      </ThemeProvider>
    </ReduxProvider>
  </React.StrictMode>
);
