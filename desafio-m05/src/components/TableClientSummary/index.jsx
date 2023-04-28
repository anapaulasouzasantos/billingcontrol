import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useContext, useEffect } from 'react';
import PageContext from '../../context/context.jsx';
import './TableClientSummary.css';
import normalizeCpf from '../../functions/normalizeCpf.jsx';

export default function BasicTable({ title }) {
  const { clientsData } = useContext(PageContext);

  useEffect(() => {
    handleTableData()
  },[])

  function handleTableData() {
    const UpToDateCustomer = clientsData.filter(client => (client.status == 'Em dia'));
    const defaultingCustomer = clientsData.filter(client => (client.status == 'Inadimplente'));
   
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
            <TableCell className='subtitle-table' >Id do cliente</TableCell>
            <TableCell className='subtitle-table' >CPF</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {handleTableData().map((row, index) => (
            <>
            {index <= 3 ?
              <TableRow
                key={row.id}
              >
                <TableCell className='data' component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell className='data bg-red' >
                  {row.id}
                </TableCell>
                <TableCell className='data' >
                  {normalizeCpf(row.cpf)}
                </TableCell>
              </TableRow>: null}
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}