import { Outlet } from 'react-router';

import { MuiLocalizationProvider } from '@/providers';
import { AppProvider } from '@/providers/AppProvider';

import { Stack } from '@/ui';
import { TopNavBar } from '@/components/navigation';

export default function RootLayout() {
  return (
    <MuiLocalizationProvider>
      <AppProvider>
        <Stack>
          <TopNavBar />
          <Outlet />
        </Stack>
      </AppProvider>
    </MuiLocalizationProvider>
  );
}
