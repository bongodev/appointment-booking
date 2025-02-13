import { Outlet, useNavigate } from 'react-router';
import { Box, Button, Typography } from '@mui/material';
import { MuiLocalizationProvider } from '@/providers';

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <MuiLocalizationProvider>
      <Box sx={{ width: 1, textAlign: 'center', mb: 4 }}>
        <Typography variant="h1">Welcome!</Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/book-slot')}
        >
          Book a Slot
        </Button>
        <Outlet />
      </Box>
    </MuiLocalizationProvider>
  );
};
