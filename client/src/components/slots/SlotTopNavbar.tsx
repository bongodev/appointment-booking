import { Box, Button, IconButton, Typography } from '@/ui';
import { ChevronLeftIcon, ChevronRightIcon } from '@/ui/Icons';
import { useSlotsContext } from '@/providers/SlotProvider';
import { getMonthAndYear, getWeekDates } from '@/utils';
import DashboardTopNavbar from '@/components/DashboardTopNavbar';

export default function SlotTopNavBar() {
  const { goToNextWeek, goToPreviousWeek, goToCurrentWeek, weekOffset } =
    useSlotsContext();
  const weekDates = getWeekDates(weekOffset);
  const weekLabel = getMonthAndYear(weekDates[0]);

  return (
    <Box>
      <DashboardTopNavbar>
        <Box
          component="div"
          sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}
        >
          <Button
            onClick={goToCurrentWeek}
            variant="outlined"
            sx={{
              color: 'white',
              borderColor: 'white',

              '&:hover': {
                borderColor: 'white',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            Today
          </Button>
          <Box sx={{ ml: 2 }}>
            <IconButton onClick={goToPreviousWeek} sx={{ color: 'white' }}>
              <ChevronLeftIcon />
            </IconButton>

            <IconButton onClick={goToNextWeek} sx={{ color: 'white' }}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          <Typography
            sx={{
              fontSize: '1.5rem',
              ml: 2,
            }}
            variant="h4"
          >
            {weekLabel}
          </Typography>
        </Box>
      </DashboardTopNavbar>
    </Box>
  );
}
