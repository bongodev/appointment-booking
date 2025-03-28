import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';

export default function SortBy() {
  return (
    <Select color='primary' size='md' defaultValue='latest'>
      <Option value='latest'>Sort by latest</Option>
      <Option value='old'>Sort by oldest</Option>
    </Select>
  );
}
