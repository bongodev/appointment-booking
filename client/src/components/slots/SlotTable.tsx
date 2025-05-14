import { timeSlots, daySlots } from '@/data';
import { getWeekDates } from '@/utils';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableContainer,
  TableHead,
} from '@mui/material';
import { ActionButtons, TableHeader, TimeSlotRow } from '.';
import { useSlotsContext } from '@/providers/SlotProvider';
import { motion, AnimatePresence } from 'framer-motion';

export default function SlotTable() {
  const { weekOffset, moveDirection } = useSlotsContext();
  const weekDates = getWeekDates(weekOffset);

  return (
    <Box sx={{ position: 'relative', p: 1 }}>
      <TableContainer
        component={Paper}
        sx={{
          maxHeight: 430,
          overflow: 'auto',
          borderRadius: '10px',
          mb: 1,
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={weekDates[0].format('DD/MM/YYYY')}
            initial={{ opacity: 0, x: moveDirection === 'left' ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: moveDirection === 'left' ? -30 : 30 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
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
          </motion.div>
        </AnimatePresence>
      </TableContainer>
      <ActionButtons />
    </Box>
  );
}
