import { LocalizationProvider as MUILocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';

type LocalizationProviderProps = {
  children: React.ReactNode;
};
export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  return (
    <MUILocalizationProvider dateAdapter={AdapterMoment}>
      {children}
    </MUILocalizationProvider>
  );
};
