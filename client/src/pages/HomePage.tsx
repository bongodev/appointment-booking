import { useNavigate } from 'react-router';

import { Box, Button, Typography } from '@/ui';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
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
    </Box>
  );
};
