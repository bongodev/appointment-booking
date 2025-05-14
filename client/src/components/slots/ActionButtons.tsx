import { Box, Button } from '@/ui';

export default function ActionButtons() {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        mr: 'auto',
        gap: 2,
      }}
    >
      <Button sx={{ fontSize: '0.8rem' }} variant="contained" color="primary">
        Save Changes
      </Button>
      <Button sx={{ fontSize: '0.8rem' }} variant="contained" color="secondary">
        Cancel
      </Button>
    </Box>
  );
}
