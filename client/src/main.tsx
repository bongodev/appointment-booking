import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';

import { BookSlotPage, HomePage, LoginPage, SignupPage } from './pages';
import QueryProvider from './providers/QueryProvider';

import './index.css';
import Dashboard from './pages/admin/Dashboard';
import Slots from './pages/admin/Slots';
import Appointments from './pages/admin/Appointments';
import Admin from './pages/admin/Admin';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="/book-slot" element={<BookSlotPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="admin" element={<Admin />}>
            <Route index element={<Dashboard />} />
            <Route path="slots" element={<Slots />} />
            <Route path="appointments" element={<Appointments />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryProvider>
  </StrictMode>
);
