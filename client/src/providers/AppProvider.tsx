import { useCurrentUser } from '@/hooks';
import { User, UserProfile } from '@/types';
import { createContext, ReactNode, useContext } from 'react';

const defaultContextValue: AppContextType = {
  currentUser: null,
  currentUserProfile: null,
  isLoading: false,
  isAuthenticated: false,
  error: null,
  refetch: async () => {
    return null;
  },
};

const AppContext = createContext<AppContextType>(defaultContextValue);
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
  const { currentUser, isLoading, isAuthenticated, error, refetch } =
    useCurrentUser();

  const currentUserProfile = currentUser?.profile || null;
  const value: AppContextType = {
    currentUser: currentUser
      ? {
          id: currentUser.id,
          name: currentUser.name,
          email: currentUser.email,
          mobile: currentUser.mobile,
          role: currentUser.role,
        }
      : null,
    currentUserProfile,
    isLoading,
    isAuthenticated,
    error,
    refetch,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
