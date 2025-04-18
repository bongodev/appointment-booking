import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';
import { TextField } from '@/ui';
// mock data type
interface Film {
  title: string;
}

function sleep(duration: number): Promise<void> {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  // later we will get  options  from parent component
  const [options, setOptions] = React.useState<readonly Film[]>([]);
  const [loading, setLoading] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    (async () => {
      setLoading(true);
      await sleep(1e3); // For demo purposes.
      setLoading(false);

      setOptions([...topFilms]);
    })();
  };

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
  };

  return (
    <Autocomplete
      sx={{ width: 300 }}
      open={open}
      onOpen={handleOpen}
      onClose={handleClose}
      isOptionEqualToValue={(option, value) => option.title === value.title}
      getOptionLabel={(option) => option.title}
      options={options}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search by client name"
          size="small"
          fullWidth
          slotProps={{
            input: {
              ...params.InputProps,
              endAdornment: (
                <React.Fragment>
                  {loading ? (
                    <CircularProgress color="inherit" size={20} />
                  ) : null}
                  {params.InputProps.endAdornment}
                </React.Fragment>
              ),
            },
          }}
        />
      )}
    />
  );
}

// test data
const topFilms = [
  { title: 'The Shawshank Redemption' },
  { title: 'The Godfather' },
  { title: 'The Godfather: Part II' },
  { title: 'The Dark Knight' },
  { title: '12 Angry Men' },
  { title: "Schindler's List" },
  { title: 'Pulp Fiction' },
  {
    title: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { title: 'The Good, the Bad and the Ugly' },
  { title: 'Fight Club' },
  {
    title: 'The Lord of the Rings: The Fellowship of the Ring',
  },
  {
    title: 'Star Wars: Episode V - The Empire Strikes Back',
  },
  { title: 'Forrest Gump' },
  { title: 'Inception' },
  {
    title: 'The Lord of the Rings: The Two Towers',
  },
  { title: "One Flew Over the Cuckoo's Nest" },
  { title: 'Goodfellas' },
  { title: 'The Matrix' },
  { title: 'Seven Samurai' },
];
