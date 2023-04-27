import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UpDownArrow from '../../assets/updown-arrows.svg';
import Edit from '../../assets/edit-profile.svg';
import Delete from '../../assets/delete-icon.svg';
import './ChargesTable.css';

function createData(id, dueDate, value, status, description) {
    return { id, dueDate, value, status, description };
}

const rows = [
    createData('248563147', '26/01/2021', 'R$ 500,00', 'Vencida', 'lorem ipsum lorem ipsum lorem ipsuipsum lorem ips,,,'),
    createData('248563147', '26/01/2021', 'R$ 500,00', 'Vencida', 'lorem ipsum lorem ipsum lorem ipsuipsum lorem ips,,,'),
    createData('248563147', '26/01/2021', 'R$ 500,00', 'Vencida', 'lorem ipsum lorem ipsum lorem ipsuipsum lorem ips,,,'),
];

export default function AccessibleTable() {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow >
                        <TableCell
                            sx={{
                                display: 'flex',
                                alignItems: 'center'
                            }}
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
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className='table-contents' component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell className='table-contents' align="center">{row.dueDate}</TableCell>
                            <TableCell className='table-contents' align="left">{row.value}</TableCell>
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