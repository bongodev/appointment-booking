import { Outlet } from 'react-router';
import { MuiLocalizationProvider } from '@/providers';

import { Box, Stack } from '@/ui';

export default function RootLayout() {
  return (
    <MuiLocalizationProvider>
      <Stack>
        <Box sx={{ mt: 8 }}>
          <Outlet />
        </Box>
      </Stack>
    </MuiLocalizationProvider>
  );
}
