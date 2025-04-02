import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import {
  AdminPageLayout,
  Appointments,
  BookSlotPage,
  Dashboard,
  HomePage,
  LoginPage,
  SignupPage,
  Slots,
} from './pages';
import QueryProvider from './providers/QueryProvider';

import './index.css';
import { AppProvider } from './providers/AppProvider';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
      <AppProvider>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/book-slot" element={<BookSlotPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="admin" element={<AdminPageLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="slots" element={<Slots />} />
              {/* <Route path="edit" element={<SlotTable />} />
            </Route> */}
            <Route path="appointments" element={<Appointments />} />
          </Route>
        </Routes>
        </AppProvider>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
);
