import { Outlet } from 'react-router';

import { Box } from '@/ui';
import { uiConfig } from '@/config';
import Sidebar from '@/components/Sidebar';
import { SidebarProvider } from '@/providers/SidebarProvider';

export default function AppLayout() {
  return (
    <SidebarProvider>
      <Box sx={{ display: 'flex' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            width: { sm: `calc(100% - ${uiConfig.drawerWidth}px)` },
          }}
        >
          <Box sx={{ pt: `${uiConfig.appBarHeight + 2}px` }}>
            <Outlet />
          </Box>
        </Box>
      </Box>
    </SidebarProvider>
  );
}
