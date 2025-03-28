import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { slotTableRows } from '@/data';
import { Box, Button } from '@mui/material';

type SlotTableProps = {
  userId?: string;
};

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
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function SlotTable({ userId }: SlotTableProps) {
  return (
    <Box sx={{ mt: 2 }}>
      <TableContainer component={Paper}>
        {userId && (
          <div
            style={{
              padding: '10px',
              fontWeight: 'bold',
              backgroundColor: '#f0f0f0',
              borderBottom: '1px solid #e0e0e0',
            }}
          >
            Editing Slots for User with ID {userId}
          </div>
        )}
        <Table sx={{ minWidth: 700 }} aria-label='customized table'>
          <TableHead>
            <TableRow>
              <StyledTableCell>Time</StyledTableCell>
              <StyledTableCell>Sunday</StyledTableCell>
              <StyledTableCell>Monday</StyledTableCell>
              <StyledTableCell>Tuesday</StyledTableCell>
              <StyledTableCell>Wednesday</StyledTableCell>
              <StyledTableCell>Thursday</StyledTableCell>
              <StyledTableCell>Friday</StyledTableCell>
              <StyledTableCell>Saturday</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {slotTableRows.map((row) => (
              <StyledTableRow key={row.time}>
                <StyledTableCell component='th' scope='row' sx={{ width: 180 }}>
                  {row.time}
                </StyledTableCell>
                <StyledTableCell>{row.sunSlot}</StyledTableCell>
                <StyledTableCell>{row.monSlot}</StyledTableCell>
                <StyledTableCell>{row.tuesSlot}</StyledTableCell>
                <StyledTableCell>{row.wednesSlot}</StyledTableCell>
                <StyledTableCell>{row.thursSlot}</StyledTableCell>
                <StyledTableCell>{row.friSlot}</StyledTableCell>
                <StyledTableCell>{row.saturSlot}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Button variant='contained' color='secondary'>
          Cancel
        </Button>
        <Button variant='contained' color='primary'>
          Save Changes
        </Button>
      </Box>
    </Box>
  );
}
