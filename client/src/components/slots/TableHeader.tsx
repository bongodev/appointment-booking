import dayjs from 'dayjs';
import { StyledTableCell } from './styled';
import { TableCell, TableRow } from '@/ui';

type Props = {
  weekDates: dayjs.Dayjs[];
};

export default function TableHeader({ weekDates }: Props) {
  return (
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
  );
}
