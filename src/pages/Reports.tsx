import * as React from 'react';
// import { Link, useHistory } from 'react-router-dom';

// import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';


interface Column {
  id: 'name' | 'phone' | 'amountOwed' | 'items' | 'address';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
    { id: 'name', label: 'Customer Name', minWidth: 170 },
    { id: 'phone', label: 'Phone Number', minWidth: 100 },
    {
      id: 'amountOwed',
      label: 'Amount Owed',
      minWidth: 170,
      align: 'right',
      format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'items',
      label: 'Items Bought',
      minWidth: 170,
      align: 'right',
      // format: (value: number) => value.toLocaleString('en-US'),
    },
    {
      id: 'address',
      label: 'Customer Location',
      minWidth: 170,
      align: 'right',
      // format: (value: string) => value.toLocaleString('en-US'),
    },
  ];

  interface Data {
    name: string;
    phone: string;
    amountOwed: number;
    items: string[];
    address: string;
  }

function createData(name: string, phone: string, amountOwed: number, items: string[], address: string): Data {
    return { name, phone, amountOwed, items, address };
  }

  const rows = [
    createData('Chinedu', '08646666623', 1000, ['shoe', 'shirt'], '123 Main St'),
    createData('China', '28644466623', 500, ['socks'], '456 Elm St'),
    createData('George', '03346666623', 200, ['hat'], '789 Oak St'),
    createData('United', '45646666623', 1500, ['pants', 'jacket'], '234 Maple St'),
    createData('Canada', '03346666623', 300, ['dress', 'scarf'], '567 Pine St'),
    createData('Australia', '08646666623', 800, ['shirt', 'tie'], '890 Cedar St'),
    createData('Germany', '08646666623', 1200, ['shoes', 'belt'], '901 Birch St'),
    createData('Ireland', '08646666623', 600, ['blouse', 'skirt'], '345 Cherry St'),
    createData('Mexico', '0846666623', 250, ['jeans', 't-shirt'], '678 Walnut St'),
    createData('Japan', '08356666623', 700, ['coat'], '901 Cedar St'),
    createData('France', '086645666623', 900, ['sweater', 'pants'], '234 Birch St'),
    createData('United Kingdom', '086467766623', 400, ['jacket', 'scarf'], '567 Pine St'),
    createData('Russia', '06330033888', 1800, ['boots'], '890 Maple St'),
    createData('Nigeria', '083446666623', 100, ['sandals', 'shorts'], '123 Oak St'),
    createData('Brazilffff', '086222666623', 1500, ['shirt', 'shorts'], '456 Cedar St'),
  ];

 function StickyHeadTable(props: any) {
  // const history = useHistory();
  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: any, newPage: React.SetStateAction<number>) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: { target: { value: string | number; }; }) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // Define a function to handle row click

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  // <Link to={`/details/${row.name}`}></Link>;
                  // <Link to='/home' state={{ row }}>
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.phone} component={Link} to="/home" >
                    
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export default StickyHeadTable