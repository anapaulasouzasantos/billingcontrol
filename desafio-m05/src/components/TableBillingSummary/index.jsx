import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import PageContext from '../../context/context.jsx';
import normalizeValue from '../../functions/normalizeValue.jsx';
import './TableBillingSummary.css';
import api from '../../config/api.jsx'

export default function BasicTable({ title }) {
  const { chargesData } = useContext(PageContext);
  const [overdueData, setOverdueData] = useState([]);
  const [paidData, setPaidData] = useState([]);
  const [previewData, setPreviewData] = useState([]);

  useEffect(() => {
    handleTableData()
    handleApi()
  },[])

  async function handleApi(){
    const response = await api.get('billings');
    setOverdueData(response.data.overdue);
    setPaidData(response.data.paid);
    setPreviewData(response.data.pending);
  }

  function handleTableData() {
    if (title === 'Cobranças Vencidas') {
      return overdueData
    }

    if (title === 'Cobranças Previstas') {
      return previewData
    }

    if (title === 'Cobranças Pagas') {
      return paidData
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
          {handleTableData().map((row, index) => (
            <>
            {index <=3 ? 
              <TableRow key={row.id}>
                <TableCell className='data-table' component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className='data-table' >{row.id}</TableCell>
                <TableCell className='data-table' >
                  {normalizeValue(row.amount)}
                </TableCell>
              </TableRow>:null}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}