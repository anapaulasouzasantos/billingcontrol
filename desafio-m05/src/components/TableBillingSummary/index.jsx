import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useContext, useEffect } from 'react';
import PageContext from '../../context/context.jsx';
import normalizeValue from '../../functions/normalizeValue.jsx';
import './TableBillingSummary.css';

export default function BasicTable({ title }) {
  const { chargesData } = useContext(PageContext);

  useEffect(() => {
    handleTableData()
  })

  function handleTableData() {
    const payed = chargesData.filter(billing => (billing.status == 'Paga'));
    const overdue = chargesData.filter(billing => (billing.status == 'Vencida'));
    const preview = chargesData.filter(billing => (billing.status == 'Pendente'));

    if (title === 'Cobranças Vencidas') {
      return overdue
    }

    if (title === 'Cobranças Previstas') {
      return preview
    }

    if (title === 'Cobranças Pagas') {
      return payed
    }
  }
  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className='subt-table' >Cliente</TableCell>
            <TableCell className='subt-table' >ID da cob.</TableCell>
            <TableCell className='subt-table' >Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {handleTableData().map((row) => (
            <TableRow key={row.id}>
              <TableCell className='data-table' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='data-table' >{row.id}</TableCell>
              <TableCell className='data-table' >
                {normalizeValue(row.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}