import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import React from 'react';

type MuiLocalizationProviderProps = {
  children: React.ReactNode;
};

export const MuiLocalizationProvider = ({
  children,
}: MuiLocalizationProviderProps) => {
  return (
    <LocalizationProvider dateAdapter={AdapterMoment}>
      {children}
    </LocalizationProvider>
  );
};
