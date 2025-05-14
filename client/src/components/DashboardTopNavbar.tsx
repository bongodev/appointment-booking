import { AppBar, Toolbar, MenuIcon, IconButton, Box } from '@/ui';

import { ReactNode } from 'react';

import { uiConfig } from '@/config';
import { UserAvatarMenu } from './navigation';
import { useSidebar } from '@/providers/SidebarProvider';
import AppLogo from './AppLogo';
import { Link } from 'react-router';

export default function DashboardTopNavbar({
  children,
}: {
  children?: ReactNode;
}) {
  const { toggleSidebar } = useSidebar();
  return (
    <AppBar
      sx={{
        height: uiConfig.appBarHeight,

        backgroundColor: 'primary.main', // optional: makes background solid
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          gap: 2,
          justifyContent: 'space-between',
          width: '100%',
          px: 4,
        }}
        disableGutters
      >
        <IconButton
          onClick={toggleSidebar}
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mr: 2,
            display: {
              xs: 'inline-flex',
              sm: 'inline-flex',
              md: 'none',
            },
          }}
        >
          <MenuIcon />
        </IconButton>
        <Box
          sx={{
            display: {
              xs: 'none',
              sm: 'none',
              md: 'block',
            },
          }}
        >
          <Link
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
            }}
            to={'/'}
          >
            <AppLogo />
          </Link>
        </Box>

        <Box sx={{ width: '100%' }}>{children}</Box>
        <UserAvatarMenu />
      </Toolbar>
    </AppBar>
  );
}
