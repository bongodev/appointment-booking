import {
  Button,
  Container,
  Grid2,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { useState } from 'react';

export const BookSlotPage = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid2
        container
        spacing={8}
        sx={{
          py: 2,
          mt: 4,
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Choose a date & time
            </Typography>
            <Typography variant="body2" sx={{ mb: 2 }}>
              Select a convenient date for your appointment.
            </Typography>
            <DatePicker
              label="Select Date"
              sx={{ width: '100%' }}
              value={moment(selectedDate)}
              onChange={(value) =>
                setSelectedDate(value ? value.toDate() : null)
              }
            />
          </Paper>
        </Grid2>

        <Grid2 size={{ xs: 12, md: 6 }} paddingX={{ xs: 0, md: 4 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Available Slots
            </Typography>
            <Stack
              direction={{ xs: 'column', md: 'row' }}
              sx={{ flexWrap: 'wrap', gap: 3 }}
            >
              <Button variant="outlined" size="medium">
                Slot 1
              </Button>
              <Button variant="outlined" size="medium">
                Slot 2
              </Button>
              <Button variant="outlined" size="medium">
                Slot 3
              </Button>
            </Stack>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};
