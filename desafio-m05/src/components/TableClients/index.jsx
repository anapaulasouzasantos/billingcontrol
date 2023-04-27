import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useContext } from 'react';
import AddChargeIcon from '../../assets/add-charge-icon.svg';
import UpDownArrow from '../../assets/updown-arrows.svg';
import PageContext from '../../context/context.jsx';
import './TableClients.css';

export default function BasicTable() {
  const {
    clientsData,
    setPageContent,
    setHeaderTitle,
    setTitleClassName,
    setClientId } = useContext(PageContext);

  function handleChange(id) {
    setPageContent('detail');
    setClientId(id)
    setHeaderTitle('Clientes');
    setTitleClassName('details-title-style');
  }
  
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
            <TableRow id={row.id}>
              <TableCell
                sx={{
                  color: '#747488', fontFamily: 'Nunito', fontSize: '14px', cursor: 'pointer'
                }}
                onClick={() => handleChange(row.id)}
              >{row.name}
              </TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.cpf}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.email}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }} >{row.tel}</TableCell>
              <TableCell><span className='overdue-client'>{row.status}</span></TableCell>
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