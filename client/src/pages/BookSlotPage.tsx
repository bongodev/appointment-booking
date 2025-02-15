import { Button, Container, Grid2, Paper, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { useSlots } from '@/api/queries';
import moment from 'moment';

export const BookSlotPage = () => {
  const { slots, selectedDate, setSelectedDate } = useSlots();
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

        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper elevation={3} sx={{ p: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              Available Slots
            </Typography>
            <Grid2 container spacing={3}>
                {slots.length > 0 ? (
                slots.map((slot) => (
                  <Grid2 key={slot._id} size={{ xs: 12, md: 6 }}>
                  <Paper elevation={2} sx={{ p: 2 }}>
                    <Typography variant="h6">{slot.name}</Typography>
                    <Typography variant="body2">{slot.description}</Typography>
                    <Typography variant="body2" sx={{ mb: 2 }}>
                    {moment(slot.startTime, 'HH:mm').format('hh:mm A')} -{' '}
                    {moment(slot.startTime, 'HH:mm')
                      .add(slot.duration, 'minutes')
                      .format('hh:mm A')}
                    </Typography>
                    <Button variant="contained" color="primary">
                    Book Slot
                    </Button>
                  </Paper>
                  </Grid2>
                ))
                ) : (
                  <Paper elevation={2} sx={{ p: 2, width: '100%' }}>
                    <Typography variant="body1">No slots available</Typography>
                  </Paper>
                )}
            </Grid2>
          </Paper>
        </Grid2>
      </Grid2>
    </Container>
  );
};
