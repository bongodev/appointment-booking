import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import moment from 'moment';
import { useSlots } from '../queries/useSlots';

export function BookSlotPage() {
  const { selectedDate, setSelectedDate, slots } = useSlots();

  return (
    <Container
      sx={{
        padding: 6,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
        borderRadius: 3,
      }}
    >
      <Typography variant="h3" fontWeight="bold" color="primary">
        Book An Appointment
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
        }}
      >
        <Card
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: 4,
            Width: 320,
            height: 150,
            background: 'linear-gradient(to left, #eef1f5,#f8f9fa)',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              Select a date
            </Typography>
            <DatePicker
              value={moment(selectedDate)}
              onChange={(value) =>
                setSelectedDate(value ? value.toDate() : null)
              }
            />
          </CardContent>
        </Card>
        <Card
          sx={{
            borderRadius: 3,
            p: 3,
            boxShadow: 4,
            height: 150,
            width: 320,
            background: 'linear-gradient(to left, #eef1f5,#f8f9fa)',
          }}
        >
          <CardContent
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography variant="body1" fontWeight="bold">
              Available Slots
            </Typography>
            <FormControl fullWidth>
              <InputLabel id="time-slot-label">Time Slot</InputLabel>
              <Select
                labelId="time-slot-label"
                id="time-slot-select"
                label="Select a time"
              >
                {slots.length ? (
                  slots.map((slot) => (
                    <MenuItem
                      key={slot._id}
                      value={slot.startTime}
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: 0,
                      }}
                    >
                      <Button
                        variant="outlined"
                        sx={{
                          color: 'black',
                          display: 'flex',
                          flexDirection: 'column',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width:'90%',
                          height: '90%',
                          paddingX:2 
                        }}
                      >
                        <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                          {slot.name}
                        </Typography>
                        <Typography variant="body2">
                          {moment(slot.startTime, 'HH:mm').format('h:mm A')} •{' '}
                          {slot.duration} mins
                        </Typography>
                      </Button>
                    </MenuItem>
                  ))
                ) : (
                  <MenuItem sx={{ fontWeight: 'bold', color: 'text.primary' }}>
                    No slots available
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>
      <Box>
        <Button
          variant="contained"
          color="success"
          sx={{ borderRadius: '8px', px: 3 }}
        >
          Confirm Appointment
        </Button>
      </Box>
    </Container>
  );
}
