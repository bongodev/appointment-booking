import { BrowserRouter, Route, Routes } from 'react-router';
import {
  BookSlotPage,
  HomePage,
  LoginPage,
  RootLayout,
  SignupPage,
} from '@/pages';
import Profile from '@/pages/Profile';

import SecureRoute from './SecureRoute';
import { AppLayout, AppointmentsPage, SlotPage } from '@/pages/app';
import DashboardPage from '@/pages/dashboard';

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="book-slot" element={<BookSlotPage />} />
        </Route>
        <Route
          path="app"
          element={
            <SecureRoute>
              <AppLayout />
            </SecureRoute>
          }
        >
          <Route index element={<DashboardPage />} />
          <Route path="slots" element={<SlotPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}
