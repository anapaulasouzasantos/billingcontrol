import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpDownArrow from '../../assets/updown-arrows.svg';
import AddChargeIcon from '../../assets/add-charge-icon.svg';

function createData(name, cpf, email, telefone, status, createAcount) {
  return { name, cpf, email, telefone, status, createAcount };
}

const rows = [
  createData('Sarah da Silva', '054 365 255 87', 'sarasilva@cubos.io', '71 9 9462 8654', 'Inadimplente'),
  createData('Sarah da Silva', '054 365 255 87', 'sarasilva@cubos.io', '71 9 9462 8654', 'Inadimplente'),
  createData('Sarah da Silva', '054 365 255 87', 'sarasilva@cubos.io', '71 9 9462 8654', 'Inadimplente'),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper} sx={{borderRadius: '30px'}}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{
               display:'flex',
               alignItems: 'center'
            }}>
              <img src={UpDownArrow}></img>
              Cliente
            </TableCell>
            <TableCell >CPF</TableCell>
            <TableCell>E-mail</TableCell>
            <TableCell>Telefone</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Criar Cobrança</TableCell>
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
              <TableCell >{row.cpf}</TableCell>
              <TableCell >{row.email}</TableCell>
              <TableCell >{row.telefone}</TableCell>
              <TableCell >{row.status}</TableCell>
              <TableCell sx={{
                display:'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}><img src={AddChargeIcon}/><span>Cobrança</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}