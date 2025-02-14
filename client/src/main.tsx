import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import { BookSlotPage, HomePage } from './pages';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="/book-slot" element={<BookSlotPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
