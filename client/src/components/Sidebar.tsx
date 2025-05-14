import * as React from 'react';
import { NavLink } from 'react-router';
import { uiConfig } from '@/config';
import {
  Box,
  CssBaseline,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from '@/ui';
import { DashboardIcon, EventAvailableIcon, ScheduleIcon } from '@/ui/Icons';
import { useSidebar } from '@/providers/SidebarProvider';

const menuItems = [
  { text: 'Dashboard', icon: <DashboardIcon />, path: '' },
  { text: 'Slots', icon: <EventAvailableIcon />, path: 'slots' },
  { text: 'Appointments', icon: <ScheduleIcon />, path: 'appointments' },
];

export default function Sidebar() {
  const { mobileOpen, toggleSidebar, closeSidebar } = useSidebar();
  const drawerWidth = uiConfig.drawerWidth;

  const drawer = (
    <Stack width={drawerWidth} height="100%">
      <List sx={{ py: 6 }}>
        {menuItems.map((item) => (
          <NavLink
            end
            key={item.text}
            to={item.path}
            onClick={closeSidebar}
            style={({ isActive }) => ({
              textDecoration: 'none',
              color: isActive ? '#1976d2' : 'inherit',
              backgroundColor: isActive
                ? 'rgba(25, 118, 210, 0.1)'
                : 'transparent',
              borderRadius: isActive ? '8px' : '0',
            })}
          >
            <ListItem
              sx={{ backgroundColor: 'inherit', borderRadius: 'inherit' }}
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          </NavLink>
        ))}
      </List>
    </Stack>
  );

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />

      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="sidebar navigation"
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={toggleSidebar}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: '100%',
            },
          }}
        >
          {drawer}
        </Drawer>

        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
              height: '100%',
              marginTop: `${uiConfig.appBarHeight}px`,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
