import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import { MuiLocalizationProvider } from '@/providers';
import { TopNavBar } from '@/components';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MuiLocalizationProvider>
      <Box>
        <TopNavBar />
      </Box>
      <Box sx={{ width: 1, textAlign: 'center', my: 6 }}>
        <Typography variant="h2">Welcome to Appointment Booking</Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 4 }}
          onClick={() => navigate('/book-slot')}
        >
          Book an Appointment
        </Button>
        <Outlet />
      </Box>
    </MuiLocalizationProvider>
  );
};
