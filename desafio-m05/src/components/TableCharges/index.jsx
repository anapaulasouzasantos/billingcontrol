import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useContext } from 'react';
import Delete from '../../assets/delete-icon.svg';
import Edit from '../../assets/edit-profile.svg';
import UpDownArrow from '../../assets/updown-arrows.svg';
import PageContext from '../../context/context.jsx';
import './TableCharges.css';
import normalizeValue from '../../functions/normalizeValue.jsx';
import normalizeDate from '../../functions/normalizeDate.jsx';

export default function BasicTable() {
  const date = Date.now();

  const { chargesData, setPageContent, setHeaderTitle, setTitleClassName } = useContext(PageContext);

  function handleChange() {
    setPageContent('detail');
    setHeaderTitle('Clientes');
    setTitleClassName('details-title-style')
  }

  return (
    <TableContainer component={Paper} sx={{ borderRadius: '30px' }}>
      <Table>
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
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {chargesData.map((row) => (
            <TableRow>
              <TableCell className='charges-table-cell' onClick={() => handleChange()}>
                {row.name}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {row.id}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {normalizeValue(row.amount)}
              </TableCell>
              <TableCell
                sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}
              >{((row.due_date).slice(0, 10))}
              </TableCell>
              <TableCell><img src={Edit}></img></TableCell>
              <TableCell><img src={Delete}></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}