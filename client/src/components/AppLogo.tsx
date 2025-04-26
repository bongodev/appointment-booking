import { Box, Logo, Typography } from '@/ui';

export default function AppLogo() {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        alignItems: 'center',
        color: 'white',
        gap: 1,
      }}
    >
      <Logo />
      <Typography
        variant="h5"
        noWrap
        component="a"
        href="#app-bar-with-responsive-menu"
        sx={{
          mr: 2,
          flexGrow: 1,
          fontFamily: 'monospace',
          fontWeight: 700,
          letterSpacing: '.1rem',
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        Appointify
      </Typography>
    </Box>
  );
}
