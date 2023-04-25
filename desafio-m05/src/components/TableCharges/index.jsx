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
import Edit from '../../assets/edit-profile.svg';
import Delete from '../../assets/delete-icon.svg';
import PageContext from '../../context/context.jsx';
import { useContext, useEffect } from 'react';
import './styles.css';

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
            <TableCell></TableCell>
            <TableCell></TableCell>
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
              <TableCell
                sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}
              >{row.id}
              </TableCell>
              <TableCell
                sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}
              >{`R$ ${(((row.amount) / 100).toFixed(2)).replace('.', ',')}`}
              </TableCell>
              <TableCell
                sx={{ color: '#747488', fontFamily: 'Nunito', fontSize: '14px' }}
              >{((row.due_date).slice(0,10))}
              </TableCell>
              <TableCell><span>
                status
              </span></TableCell>
              <TableCell><span >{row.description}</span></TableCell>
              <TableCell><img src={Edit}></img></TableCell>
              <TableCell><img src={Delete}></img></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}