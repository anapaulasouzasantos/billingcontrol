import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, id, value) {
  return { name, id, value };
}

const rows = [
  createData('Sara Silva', 223456787, 'R$ 1000,00'),
  createData('Carlos Prado', 223456781,'R$ 400,00'),
  createData('Lara Brito', 223456781, 'R$ 900,00'),
  createData('Soraia Neves', 223456787, 'R$ 700,00'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Cliente</TableCell>
            <TableCell >ID da cob.</TableCell>
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
              <TableCell >{row.id}</TableCell>
              <TableCell >{row.value}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}