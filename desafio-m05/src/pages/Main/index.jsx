import EditUserModal from '../../components/EditUserModal';
import { useState } from 'react';
import ContentClients from '../../components/Content/ContentClients';
import ContentHome from '../../components/Content/ContentHome';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import PageContext from '../../context/context.jsx';
import './styles.css';

function Main() {
    const [open, setOpen] = useState(false);
    const [pageContent, setPageContent] = useState('home');
    return (
        <PageContext.Provider value={{ pageContent, setPageContent }}>
            <div className="main-container">
                <EditUserModal
                    open={open}
                    setOpen={setOpen}
                />
                <Sidebar />
                <div className='container-content'>
                    <Header />
                    <div className='render-content'>
                        {pageContent === 'home' && <ContentHome />}
                        {pageContent === 'clients' && <ContentClients />}
                    </div>
                </div>

            </div>
        </PageContext.Provider>
    )
}

export default Main;