import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, duedate, value) {
  return { name, duedate, value };
}

const rows = [
  createData('Cameron Williamson', '03/02/2021', 'R$ 500,00'),
  createData('Savannah Nguyen', '04/03/2021','R$ 500,00'),
  createData('Darlene Robertson', '21/04/2021', 'R$ 500,00'),
  createData('Marvin McKinney', '08/05/2021', 'R$ 500,00'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Clientes</TableCell>
            <TableCell >Data de venc.</TableCell>
            <TableCell>Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell >{row.duedate}</TableCell>
              <TableCell >{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}