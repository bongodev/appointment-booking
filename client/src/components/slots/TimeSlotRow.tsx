import { Button } from '@/ui';
import { StyledTableCell, StyledTableRow } from './styled';

type Props = {
  className?: string;
  daySlots: string[];
  slot: string;
};

export default function TimeSlotRow({ slot, daySlots }: Props) {
  return (
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
  );
}
