import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { timeSlots, daySlots } from '@/data';
import { Box, Button } from '@mui/material';
import dayjs from 'dayjs';

type SlotTableProps = {};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  textAlign: 'center',
  border: '1px solid rgba(224, 224, 224, 1)',
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
}));

const getWeekDates = () => {
  const today = dayjs();
  const startOfWeek = today.startOf('week');
  return Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, 'day'));
};

export default function SlotTable({}: SlotTableProps) {
  const weekDates = getWeekDates();

  const isSameMonth = weekDates[0].month() === weekDates[6].month();

  const weekLabel = isSameMonth
    ? weekDates[0].format('MMMM YYYY')
    : `${weekDates[0].format('MMM D')} – ${weekDates[6].format('MMM D, YYYY')}`;

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
            <TableRow>
              <StyledTableCell component="th" scope="row" sx={{ width: 180 }}>
                Time
              </StyledTableCell>
              {weekDates.map((date, index) => {
                const isToday = date.isSame(dayjs(), 'day');

                return (
                  <TableCell
                    key={index}
                    align="center"
                    sx={{
                      bgcolor: isToday ? 'gray' : 'primary.main',
                      color: 'white',
                      border: '1px solid rgba(224, 224, 224, 1)',
                    }}
                  >
                    <div style={{ fontWeight: 'bold', fontSize: 15 }}>
                      {date.format('DD')}
                    </div>
                    <div style={{ fontSize: 8 }}>
                      {date.format('ddd').toUpperCase()}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          </TableHead>
          <TableBody>
            {timeSlots.map((slot) => (
              <StyledTableRow key={slot}>
                <StyledTableCell>{slot}</StyledTableCell>
                {daySlots.map((daySlot) => (
                  <StyledTableCell
                    key={daySlot}
                    sx={{
                      position: 'relative',
                      '&:hover .hover-button': { display: 'inline-flex' },
                    }}
                  >
                    <Button
                      className="hover-button"
                      variant="text"
                      color="primary"
                      sx={{
                        display: 'none',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '100%',
                        height: '100%',
                        transform: 'translate(-50%, -50%)',
                        minWidth: 'auto',
                        padding: 2,
                        fontSize: '0.75rem',
                        textTransform: 'none',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      + Reserve{' '}
                    </Button>
                  </StyledTableCell>
                ))}
              </StyledTableRow>
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
