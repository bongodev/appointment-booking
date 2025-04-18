import * as React from 'react';
import { NavLink } from 'react-router';

import { uiConfig } from '@/config';
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuIcon,
  Stack,
  Toolbar,
} from '@/ui';
import { DashboardIcon, EventAvailableIcon, ScheduleIcon } from '@/ui/Icons';

const menuItems = [
  {
    text: 'Dashboard',
    icon: <DashboardIcon />,
    path: '',
  },
  {
    text: 'Slots',
    icon: <EventAvailableIcon />,
    path: 'slots',
  },
  {
    text: 'Appointments',
    icon: <ScheduleIcon />,
    path: 'appointments',
  },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const drawerWidth = uiConfig.drawerWidth;

  const drawer = (
    <Stack width={drawerWidth}>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <NavLink
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={item.path}
          >
            <ListItem key={item.text} disablePadding>
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
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          slotProps={{
            root: {
              keepMounted: true, // Better open performance on mobile.
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
