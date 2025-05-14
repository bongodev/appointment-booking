import { useNavigate } from 'react-router';

import { Box, Button, Typography } from '@/ui';
import { TopNavBar } from '@/components/navigation';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <TopNavBar />
      <Box sx={{ width: 1, textAlign: 'center', my: 10 }}>
        <Typography variant="h3">Welcome to Appointment Booking</Typography>
        <Button
          variant="contained"
          sx={{ mt: 4, px: 6, py: 1 }}
          onClick={() => navigate('/book-slot')}
        >
          Book an Appointment
        </Button>
      </Box>
    </>
  );
};
