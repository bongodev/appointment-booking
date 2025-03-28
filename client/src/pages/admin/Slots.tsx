import { SlotTable } from '@/components';
import { Box, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

type SlotProps = {};

export default function Slots({}: SlotProps) {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [showSlotTable, setShowSlotTable] = useState(false);

  const handleEditClick = () => {
    setShowSlotTable(true);
    navigate(`edit/${userId}`);
  };

  return (
    <Box gap={5}>
      <p>Slots</p>
      <Button variant='contained' color='primary' sx={{ width: 'auto' }} onClick={handleEditClick}>
        Edit Slots
      </Button>
      {showSlotTable && <SlotTable userId={userId} />}
    </Box>
  );
}
