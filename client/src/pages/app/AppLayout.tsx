import { Outlet } from 'react-router';

import { Box } from '@/ui';

import { Sidebar } from '@/components/navigation';
import { uiConfig } from '@/config';

export default function AppLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          paddingX: 2,
          paddingY: 2,
          flexGrow: 1,
          width: { sm: `calc(100% - ${uiConfig.drawerWidth}px)` },
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}
