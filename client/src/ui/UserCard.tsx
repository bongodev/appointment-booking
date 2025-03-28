import { Avatar, Box } from '@mui/material';

export default function UserCard({
  imgSrc,
  alt,
  name,
}: {
  imgSrc: string;
  alt: string;
  name: string;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: 2,
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ width: 34, height: 34 }} alt={alt} src={imgSrc} />
      {name}
    </Box>
  );
}
