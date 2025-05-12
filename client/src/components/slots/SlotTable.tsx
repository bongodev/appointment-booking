import { timeSlots, daySlots } from '@/data';
import { getWeekDates, getWeekLabel } from '@/utils';
import {
  Box,
  Button,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from '@/ui';
import { TableHeader, TimeSlotRow } from '.';

export default function SlotTable() {
  const weekDates = getWeekDates();
  const weekLabel = getWeekLabel(weekDates);

  return (
    <Box sx={{ mt: 3 }}>
      <Box>
        <div
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            backgroundColor: 'white',
            color: 'primary.main',
            textAlign: 'center',
            margin: 5,
          }}
        >
          {weekLabel}
        </div>
      </Box>
      <TableContainer sx={{ minWidth: 700, maxHeight: 550 }} component={Paper}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableHeader weekDates={weekDates} />
          </TableHead>
          <TableBody>
            {timeSlots.map((slot) => (
              <TimeSlotRow key={slot} slot={slot} daySlots={daySlots} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', flexDirection: 'row-reverse', gap: 2 }}>
        <Button variant="contained" color="primary">
          Save Changes
        </Button>
        <Button variant="contained" color="secondary">
          Cancel
        </Button>
      </Box>
    </Box>
  );
}
