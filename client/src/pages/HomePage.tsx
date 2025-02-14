import { Box, Button, Typography } from '@mui/material';
import { Outlet, useNavigate } from 'react-router';
import { LocalizationProvider } from '../providers';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <LocalizationProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 4,
          padding: 4,
          background: 'linear-gradient(to right, #f8f9fa, #eef1f5)',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            padding: 6,
            backgroundColor: 'white',
            borderRadius: 3,
            boxShadow:1
          }}
        >
          <Typography variant="h2">Welcome to Appointment Booking</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/book-slot')}
          >
            Book a Slot
          </Button>
        </Box>
        <Outlet />
      </Box>
     </LocalizationProvider>
  );
};
