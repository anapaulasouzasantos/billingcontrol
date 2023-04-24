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
import { useContext, useEffect } from 'react';
import './styles.css';

export default function BasicTable() {
  const { chargesData, setPageContent, setHeaderTitle } = useContext(PageContext);

  function handleChange() {
    setPageContent('detail');
    setHeaderTitle('Clientes >');
  }

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '30px' }}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell >
              <img src={UpDownArrow}></img>
              Cliente
            </TableCell>
            <TableCell >
              <img src={UpDownArrow}></img>
              ID Cob.
            </TableCell>
            <TableCell>Valor</TableCell>
            <TableCell>Data de venc.</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Descrição</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chargesData.map((row) => (
            <TableRow className='table-cell'>
              <TableCell
                sx={{
                  color: '#747488', fontFamily: 'Nunito', fontSize: '14px', cursor: 'pointer'
                }}
                onClick={() => handleChange()}
              >{row.name}
              </TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.id}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}>{row.amount}</TableCell>
              <TableCell sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }} >{row.due_date}</TableCell>
              <TableCell><span className='overdue-client'>data vencimento</span></TableCell>
              <TableCell><span className='overdue-client'>{row.description}</span></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}