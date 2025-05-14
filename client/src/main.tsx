import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppRouter from './router/AppRouter';

import './index.css';
import { AppProvider } from './providers/AppProvider';
import QueryProvider from './providers/QueryProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <AppProvider>
        <AppRouter />
      </AppProvider>
    </QueryProvider>
  </StrictMode>
);
