import { Outlet } from 'react-router';
import { MuiLocalizationProvider } from '@/providers';

import { Box, Stack } from '@/ui';
import { TopNavBar } from '@/components/navigation';

export default function RootLayout() {
  return (
    <MuiLocalizationProvider>
      <Stack>
        <TopNavBar />
        <Box sx={{ mt: 8 }}>
          <Outlet />
        </Box>
      </Stack>
    </MuiLocalizationProvider>
  );
}
