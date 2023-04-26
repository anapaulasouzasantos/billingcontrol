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
import './styles.css';
import PageContext from '../../context/context.jsx';
import { useContext, useEffect, useState } from 'react';
import api from '../../config/api';
import normalizeDate from '../../functions/normalizeDate';
import normalizeValue from '../../functions/normalizeValue';

export default function AccessibleTable() {
    const { clientId } = useContext(PageContext);
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        handleTableData()
    }, [])
    async function handleTableData() {

        try {
            const data = await api.get(`/billings/${clientId}`)
            console.log(data.data)
            setTableData(data.data)
        } catch (error) {

        }

    }

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell
                            className='subtitle-charges-table'
                            align="center" >
                            <img className='up-down-icon' src={UpDownArrow} />
                            ID Cob.</TableCell>
                        <TableCell
                            className='subtitle-charges-table'
                            align="center">
                            <img className='up-down-icon' src={UpDownArrow} />
                            Data de Venc.</TableCell>
                        <TableCell className='subtitle-charges-table' align="left">Valor</TableCell>
                        <TableCell className='subtitle-charges-table' align="left">Status</TableCell>
                        <TableCell className='subtitle-charges-table' align="left">Descrição</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {tableData?.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='table-contents' component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell className='table-contents' align="center">
                                {normalizeDate(row.due_date)}
                            </TableCell>
                            <TableCell className='table-contents' align="left">{normalizeValue(row.amount)}</TableCell>
                            <TableCell
                                className='table-contents'
                                align="left"
                            ><strong className='expired-status' >{row.status}</strong>
                            </TableCell>
                            <TableCell
                                className='table-contents'
                                align="left"
                                sx={{ display: 'flex', justifyContent: 'space-between' }}>
                                {row.description}
                                <img src={Edit} />
                                <img src={Delete} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}