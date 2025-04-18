import { useLogout } from '@/hooks';
import { useApp } from '@/providers/AppProvider';
import { Avatar, Box, Divider, MenuItem, Typography } from '@/ui';
import { NavLink } from 'react-router';

const menuItems: { name: string; to?: string }[] = [
  { name: 'Profile', to: '/app/profile' },
  { name: 'Account', to: '/app/account' },
  { name: 'Dashboard', to: '/app' },
  { name: 'Logout' },
];

export default function MenuItemList() {
  const logout = useLogout();
  const user = useApp();

  return (
    <>
      <MenuItem sx={{ display: 'flex', alignItems: 'center', gap: 2, py: 1.5 }}>
        <Avatar src={''} alt="profile pic" sx={{ width: 40, height: 40 }} />
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            {user.currentUser?.name.toUpperCase()}
          </Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {user.currentUser?.email}
          </Typography>
        </Box>
      </MenuItem>
      <Divider sx={{ my: 1 }} />
      {menuItems.map((menuItem) => {
        return menuItem.name === 'Logout' ? (
          <MenuItem key={menuItem.name} onClick={logout}>
            <Typography sx={{ textAlign: 'center', px: 5, width: '100%' }}>
              {menuItem.name}
            </Typography>
          </MenuItem>
        ) : (
          <NavLink
            style={{ textDecoration: 'none', color: 'inherit' }}
            to={menuItem.to as string}
          >
            <MenuItem key={menuItem.name}>
              <Typography sx={{ textAlign: 'center', px: 5, width: '100%' }}>
                {menuItem.name}
              </Typography>
            </MenuItem>
          </NavLink>
        );
      })}
    </>
  );
}
