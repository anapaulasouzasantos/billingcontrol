import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Delete from '../../assets/delete-icon.svg';
import Edit from '../../assets/edit-profile.svg';
import UpDownArrow from '../../assets/updown-arrows.svg';
import PageContext from '../../context/context.jsx';
import { useContext, useEffect } from 'react';
import normalizeValue from '../../functions/normalizeValue.jsx';
import normalizeDate from '../../functions/normalizeDate.jsx';
import './TableCharges.css';

export default function BasicTable() {
  const { 
    chargesData, 
    setPageContent, 
    setHeaderTitle, 
    setTitleClassName,
    setClientId } = useContext(PageContext);
   
  function handleChange(id) {
    setPageContent('detail');
    setClientId(id)
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
          {chargesData?.map((row) => (
            <TableRow id={row.id}>
              <TableCell 
              className='charges-table-cell' onClick={() => handleChange(row.client_id)}>
                {row.name}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {row.id}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {normalizeValue(row.amount)}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {normalizeDate(row.due_date)}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {row.status}
              </TableCell>
              <TableCell className='charges-table-cell'>
                {row.description}
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