import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import { MuiLocalizationProvider } from '@/providers';
import { useEffect, useState } from 'react';
import http from '@/config/http';
import { appConfig } from '@/config';

export const HomePage = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    http.get('/api/users').then(({ data }) => {
      setUsers(data);
    });
  }, []);

  const logout = () => {
    localStorage.removeItem(appConfig.AUTH.ACCESS_TOKEN_KEY);
    localStorage.removeItem(appConfig.AUTH.REFRESH_TOKEN_KEY);
    window.location.replace('/login');
  };

  return (
    <MuiLocalizationProvider>
      <Box sx={{ width: 1, textAlign: 'center', my: 4 }}>
        <Typography variant="h2">Welcome to Appointment Booking</Typography>
        <Typography>{users.length}</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => navigate('/book-slot')}
        >
          Book an Appointment
        </Button>

        <Outlet />
        <Button variant="contained" color="error" onClick={logout}>
          Logout
        </Button>
      </Box>
    </MuiLocalizationProvider>
  );
};
