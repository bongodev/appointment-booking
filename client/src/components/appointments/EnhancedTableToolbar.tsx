import { IconButton, Toolbar, Tooltip, Typography } from '@/ui';
import { DeleteIcon } from '@/ui/Icons';
import { alpha, Box } from '@mui/material';
import SearchBar from './SearchBar';
import SortBy from './SortBy';

interface EnhancedTableToolbarProps {
  numSelected: number;
}
export default function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
  const { numSelected } = props;
  return (
    <Toolbar
      sx={[
        {
          pl: { sm: 2 },
          pr: { xs: 1, sm: 1 },
        },
        numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        },
      ]}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          sx={{ flex: '1 1 100%', fontWeight: 'bold' }}
          variant='h6'
          id='tableTitle'
          component='div'
        >
          Appointments
        </Typography>
      )}
      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Tooltip title='Search bar'>
            <SearchBar />
          </Tooltip>
          <Tooltip title='sort by latest or oldest'>
            <SortBy />
          </Tooltip>
        </Box>
      )}
    </Toolbar>
  );
}
