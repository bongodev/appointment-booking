import { useCurrentUser } from '@/hooks';
import { User, UserProfile } from '@/types';
import { createContext, ReactNode, useContext } from 'react';

const AppContext = createContext<AppContextType | null>(null);
export const useApp = () => useContext(AppContext);
interface AppProviderProps {
  children: ReactNode;
}
interface AppContextType {
  currentUser: User | null;
  currentUserProfile: UserProfile | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  error: Error | null;
  refetch: () => Promise<any>;
}
export function AppProvider({ children }: AppProviderProps) {
  const { data, isLoading, isAuthenticated, error, refetch } = useCurrentUser();

  const currentUser: User | null = data
    ? {
        id: data.id,
        name: data.name,
        email: data.email,
        mobile: data.mobile,
        role: data.role,
      }
    : null;

  const currentUserProfile = data?.profile || null;
  const value: AppContextType = {
    currentUser,
    currentUserProfile,
    isLoading,
    isAuthenticated,
    error,
    refetch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
