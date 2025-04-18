import { useApp } from '@/providers/AppProvider';
import { Box } from '@/ui';
import { CircularProgress } from '@/ui/Icons';
import { Navigate, useLocation } from 'react-router';

interface SecureRouteProps {
  children: React.ReactNode;
  allowedRoles?: string[];
  redirectTo?: string;
}

export const SecureRoute = ({
  children,
  allowedRoles,
  redirectTo = '/login',
}: SecureRouteProps) => {
  const location = useLocation();
  const { currentUser, isLoading, isAuthenticated } = useApp();
  if (isLoading) {
    return (
      <Box sx={{ display: 'flex' }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }
  if (allowedRoles && allowedRoles.length > 0) {
    if (
      !currentUser ||
      !currentUser.role ||
      !allowedRoles.includes(currentUser.role.name)
    ) {
      return <Navigate to="/unauthorized" replace />;
    }
  }
  return children;
};
