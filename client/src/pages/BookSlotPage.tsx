import { Container, Grid2, Stack, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';

export const BookSlotPage = () => {
  return (
    <Container>
      <Grid2 container spacing={28} sx={{ py: 4 }}>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography variant="h5">Book an appointment</Typography>
          <Stack spacing={2}>
            <Typography>
              Available slots:
            </Typography>
            <Typography>
              slot 1
            </Typography>
            <Typography>
              slot 2
            </Typography>
            <Typography>
              slot 3
            </Typography>
          </Stack>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Typography>Choose a date and time to book an appointment</Typography>
          <DatePicker />
        </Grid2>
      </Grid2>
    </Container>
  );
};
