import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { useSearchParams } from 'react-router';

export default function SortBy() {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleValueChange(value: string | null) {
    if (value) {
      searchParams.set('sort', value);
      setSearchParams(searchParams);
    }
  }
  return (
    <Select
      onChange={(_, value) => handleValueChange(value)}
      color="primary"
      size="md"
      defaultValue="latest"
    >
      <Option value="latest">Sort by latest</Option>
      <Option value="old">Sort by oldest</Option>
    </Select>
  );
}
