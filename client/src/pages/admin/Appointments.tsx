import * as React from 'react';
import Checkbox from '@mui/material/Checkbox';
import { sampleAppointments } from '@/data/appointmentData';
import {
  Box,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from '@/ui';
import {
  EnhancedTableHead,
  EnhancedTableToolbar,
} from '@/components/appointments';
import UserCard from '@/ui/UserCard';
import { AppointMentData, Order } from '@/types';
import { getComparator } from '@/utils/comparators';
import { useSearchParams } from 'react-router';

export default function Appointments() {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] =
    React.useState<keyof AppointMentData>('clientName');
  const [selected, setSelected] = React.useState<readonly string[]>([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const visibleRows = React.useMemo(
    () => [...sampleAppointments].sort(getComparator(order, orderBy)),
    [order, orderBy]
  );

  const handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property: keyof AppointMentData
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = visibleRows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleRowClick = (clickedRowId: string) => {
    const newSelectedItems = selected.includes(clickedRowId)
      ? selected.filter((_id) => _id !== clickedRowId)
      : [...selected, clickedRowId];
    setSelected(newSelectedItems);
  };

  function handlePageChange(page: number) {
    searchParams.set('page', page.toString());
    setSearchParams(searchParams);
  }

  // Avoid a layout jump when reaching the last page with empty rows.
  // const emptyRows =
  //   page > 0
  //     ? Math.max(0, (1 + page) * rowsPerPage - sampleAppointments.length)
  //     : 0;

  return (
    <Box sx={{ width: '100%' }}>
      <Paper sx={{ width: '100%', mb: 2, boxShadow: 'none' }}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table
            sx={{ minWidth: 750, boxShadow: 'none' }}
            aria-labelledby='tableTitle'
            size={'medium'}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
            />
            <TableBody>
              {visibleRows.map((row, index) => {
                const isItemSelected = selected.includes(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={() => handleRowClick(row.id)}
                    role='checkbox'
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.id}
                    selected={isItemSelected}
                    sx={{ cursor: 'pointer' }}
                  >
                    <TableCell padding='checkbox'>
                      <Checkbox
                        color='primary'
                        checked={isItemSelected}
                        aria-labelledby={labelId}
                      />
                    </TableCell>
                    <TableCell
                      align='center'
                      component='th'
                      id={labelId}
                      scope='row'
                      padding='none'
                      sx={{
                        py: 1,
                      }}
                    >
                      <UserCard
                        name={row.clientName}
                        imgSrc={row.clientImgUrl}
                        alt={row.clientName}
                      />
                    </TableCell>
                    <TableCell sx={{ py: 1 }} align='center'>
                      {row.date}
                    </TableCell>
                    <TableCell sx={{ py: 1 }} align='center'>
                      {row.time}
                    </TableCell>
                    <TableCell sx={{ py: 1 }} align='center'>
                      {row.status}
                    </TableCell>
                    <TableCell sx={{ py: 1 }} align='center'>
                      <UserCard
                        name={row.appointer}
                        imgSrc={row.appointerImgUrl}
                        alt={row.appointer}
                      />
                    </TableCell>
                    <TableCell
                      sx={{ py: 1 }}
                      key={row.appointmentTitle}
                      align='center'
                    >
                      {row.appointmentTitle}
                    </TableCell>
                  </TableRow>
                );
              })}
              {/* {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )} */}
            </TableBody>
          </Table>
          <Stack
            sx={{
              py: 2,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            spacing={2}
          >
            <Pagination
              onChange={(_e, page) => handlePageChange(page)}
              count={20}
              variant='outlined'
              shape='rounded'
            />
          </Stack>
        </TableContainer>
      </Paper>
    </Box>
  );
}
