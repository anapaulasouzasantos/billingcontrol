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
import normalizeDate from '../../functions/normalizeDate';
import normalizeValue from '../../functions/normalizeValue';
import './TableClientSummary.css';

export default function BasicTable({ title }) {
  const { chargesData } = useContext(PageContext);

  useEffect(() => {
    handleTableData()
  })

  function handleTableData() {
    const UpToDateCustomer = chargesData.filter(billing => (billing.status == 'Paga' || billing.status == 'Pendente'));
    const defaultingCustomer = chargesData.filter(billing => (billing.status == 'Vencida'));

    if (title === 'Clientes Inadimplentes') {
      return defaultingCustomer
    }

    if (title === 'Clientes em dia') {
      return UpToDateCustomer
    }
  }

  return (
    <TableContainer component={Paper}>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell className='subtitle-table'>Clientes</TableCell>
            <TableCell className='subtitle-table' >Data de venc.</TableCell>
            <TableCell className='subtitle-table' >Valor</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {handleTableData().map((row) => (
            <TableRow
              key={row.name}
            >
              <TableCell className='data' component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell className='data bg-red' >
                {normalizeDate(row.due_date)}
              </TableCell>
              <TableCell className='data' >
                {normalizeValue(row.amount)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}