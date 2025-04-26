import { Outlet } from 'react-router';

import { MuiLocalizationProvider } from '@/providers';
import { AppProvider } from '@/providers/AppProvider';

import { Box, Stack } from '@/ui';
import { TopNavBar } from '@/components/navigation';

export default function RootLayout() {
  return (
    <MuiLocalizationProvider>
      <AppProvider>
        <Stack>
          <TopNavBar />
          <Box sx={{ mt: 8 }}>
            <Outlet />
          </Box>
        </Stack>
      </AppProvider>
    </MuiLocalizationProvider>
  );
}
