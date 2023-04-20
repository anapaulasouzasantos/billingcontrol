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
import PageContext from '../../context/context.jsx';
import { useContext } from 'react';
import './styles.css';

export default function BasicTable() {
  const { clientsData } = useContext(PageContext);
  
  return (
    <TableContainer component={Paper} sx={{ borderRadius: '30px' }}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell sx={{
              display: 'flex',
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
          {clientsData.map((row) => (
            <TableRow className='table-cell'>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.name}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.cpf}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.email}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }} >{row.tel}</TableCell>
              <TableCell><span className='overdue-client'>Inadimplente</span></TableCell>
              <TableCell sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer'
              }}>
                <img src={AddChargeIcon} />
                <span style={{ color: '#DA0175', fontSize: '8px', fontWeight: 'bold' }}>Cobrança</span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}