import { SlotTable } from '@/components';
import { Box } from '@mui/material';
import { SlotProvider } from '@/providers/SlotProvider';
import { SlotTopNavBar } from '@/components/slots';

export default function Slots() {
  return (
    <SlotProvider>
      <Box>
        <SlotTopNavBar />
        <SlotTable />;
      </Box>
    </SlotProvider>
  );
}
