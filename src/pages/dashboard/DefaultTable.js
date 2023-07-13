/* eslint-disable react/prop-types */
import React, { useMemo, useState } from 'react';
import { useReactTable, getCoreRowModel, getPaginationRowModel, getSortedRowModel } from '@tanstack/react-table';

import { flexRender } from '@tanstack/react-table';
import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import MainCard from 'components/MainCard';
import { DoubleLeftOutlined } from '@ant-design/icons';

function DefaultTable({ rowData, columns }) {
  const COLUMNS = useMemo(() => columns, []);
  const data = useMemo(() => rowData, []);
  const [sorted, setsorted] = useState([]);
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns: COLUMNS,
    enableRowSelection: true,
    state: {
      sorting: sorted,
      rowSelection
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    onSortingChange: setsorted
  });

  return (
    <>
      <MainCard sx={{ mt: 2 }} content={false}>
        <Box>
          <TableContainer
            sx={{
              width: '100%',
              maxHeight: '550px',
              '& td, & th': { whiteSpace: 'nowrap' }
            }}
          >
            <Table
              stickyHeader
              aria-label="sticky table"
              sx={{
                '& .MuiTableCell-root:first-of-type': {
                  pl: 2
                },
                '& .MuiTableCell-root:last-of-type': {
                  pr: 3
                }
              }}
            >
              {/* // head */}
              <TableHead>
                {table.getHeaderGroups().map((headerGroup) => {
                  return (
                    <TableRow key={headerGroup.id} sx={{ backgroundColor: '#e9eef1' }}>
                      {headerGroup.headers.map((header) => (
                        <TableCell key={header.id} onClick={header.column.getToggleSortingHandler()}>
                          {flexRender(header.column.columnDef.header, header.getContext())}
                          {{
                            asc: ' 🔼',
                            desc: ' 🔽'
                          }[header.column.getIsSorted()] ?? null}
                        </TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableHead>
              {/* {Body} */}
              <TableBody style={{ height: '300px', overflow: 'auto' }}>
                {table?.getRowModel().rows.map((row) => {
                  return (
                    <TableRow hover role="checkbox" sx={{ '&:last-child td, &:last-child th': { border: 0 } }} key={row?.id}>
                      {row.getVisibleCells().map((cell) => (
                        <TableCell key={cell?.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</TableCell>
                      ))}
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </MainCard>

      {/* {Pagination} */}
      <Stack
        direction="row"
        spacing={2}
        sx={{
          marginTop: '15px',
          justifyContent: 'end',
          backgroundColor: '#e9eef1',
          color: 'black',
          padding: '10px'
        }}
      >
        <Button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
          <DoubleLeftOutlined />
        </Button>
        <Button className="border rounded p-1" onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
          {'<'}
        </Button>
        <Button className="border rounded p-1" onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
          {'>'}
        </Button>
        <Button
          className="border rounded p-1"
          onClick={() => table.setPageIndex(table.getPageCount() - 1)}
          disabled={!table.getCanNextPage()}
        >
          {'>>'}
        </Button>
        <p style={{ paddingTop: '9px', fontSize: '15px' }}>
          <strong>
            Page: {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
          </strong>
        </p>
        <p>
          | Go to page: &nbsp;
          <OutlinedInput
            type="number"
            sx={{ width: '70px' }}
            defaultValue={table.getState().pagination.pageIndex + 1}
            onChange={(e) => {
              const page = e.target.value ? Number(e.target.value) - 1 : 0;
              table.setPageIndex(page);
            }}
          />
        </p>
        <Select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <MenuItem key={pageSize} value={pageSize}>
              Show {pageSize}
            </MenuItem>
          ))}
        </Select>
      </Stack>
    </>
  );
}

export default DefaultTable;
