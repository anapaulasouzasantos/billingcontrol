import './styles.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import EditUserModal from '../../components/EditUserModal';
import { useState } from 'react';

function Main() {
    const [open, setOpen] = useState(false);

    return (
        <div className="main-container">
            <Header
                open={open}
                setOpen={setOpen}
            />
            <Sidebar />
            <EditUserModal
                open={open}
                setOpen={setOpen}
            />
        </div>
    )
}

export default Main;