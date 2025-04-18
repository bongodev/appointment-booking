import { Typography, Button, Container, Box } from '@/ui/index';
import { Link } from 'react-router';

export const UnauthorizedPage = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
      }}
    >
      <Box>
        <Typography variant="h6" component="h1" gutterBottom>
          Unauthorized
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          You do not have permission to view this page.
        </Typography>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          sx={{ marginTop: 5 }}
        >
          Go to HomePage
        </Button>
      </Box>
    </Container>
  );
};
