import EditUserModal from '../../components/EditUserModal';
import ClientModal from '../../components/ClientModal';
import { useState } from 'react';
import ContentCharge from '../../components/Content/ContentCharge'
import ContentClients from '../../components/Content/ContentClients';
import ContentClientsDetail from '../../components/Content/ContentClientsDetail';
import ContentHome from '../../components/Content/ContentHome';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import PageContext from '../../context/context.jsx';
import './main.css';
import AddChargeModal from '../../components/AddChargeModal';
import '../../utils/input.css'

function Main() {
    const [pageContent, setPageContent] = useState('home');
    const [open, setOpen] = useState(false);
    const [openModalClient, setOpenModalClient] = useState(false);
    const [modalClientTitle, setModalClientTitle] = useState('');
    const [headerTitle, setHeaderTitle] = useState('Resumo das Cobranças');
    const [titleClassName, setTitleClassName] = useState('');
    const [clientsData, setClientsData] = useState([]);
    const [chargesData, setChargesData] = useState([]);
    const [modalProfile, setModalProfile] = useState(false);
    const [openChargeModal, setOpenChargeModal] = useState(false);

    return (
        <PageContext.Provider
            value={{
                pageContent, setPageContent,
                open, setOpen,
                openModalClient, setOpenModalClient,
                clientsData, setClientsData,
                modalClientTitle, setModalClientTitle,
                headerTitle, setHeaderTitle,
                titleClassName, setTitleClassName,
                chargesData, setChargesData,
                modalProfile, setModalProfile,
                openChargeModal, setOpenChargeModal
            }}
        >
            <div className="main-container">
                <EditUserModal />
                <ClientModal />
                <AddChargeModal />
                <Sidebar />
                <div className='container-content'>
                    <Header />
                    <div className='render-content'>
                        {pageContent === 'home' && <ContentHome />}
                        {pageContent === 'clients' && <ContentClients />}
                        {pageContent === 'charge' && <ContentCharge />}
                        {pageContent === 'detail' && <ContentClientsDetail />}
                    </div>
                </div>

            </div>
        </PageContext.Provider>
    )
}

export default Main;