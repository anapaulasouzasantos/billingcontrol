import EditUserModal from '../../components/EditUserModal';
import ClientModal from '../../components/ClientModal';
import {  useState } from 'react';
import ContentCharge from '../../components/Content/ContentCharge'
import ContentClients from '../../components/Content/ContentClients';
import ContentClientsDetail from '../../components/Content/ContentClientsDetail';
import ContentHome from '../../components/Content/ContentHome';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import PageContext from '../../context/context.jsx';
import './main.css';
import EditClientModal from '../../components/EditClientModal';
import AddChargeModal from '../../components/AddChargeModal';
import '../../utils/input.css'

function Main() {
    const [open, setOpen] = useState(false);
    const [openModalClient, setOpenModalClient] = useState(false);
    const [openModalEditClient, setOpenModalEditClient] = useState(false);
    const [modalProfile, setModalProfile] = useState(false);
    const [pageContent, setPageContent] = useState('home');
    const [headerTitle, setHeaderTitle] = useState('Resumo das Cobranças');
    const [titleClassName, setTitleClassName] = useState('');
    const [count, setCount] = useState('');
    const [clientId, setClientId] = useState();
    const [clientName, setClientName] = useState();
    const [clientsData, setClientsData] = useState([]);
    const [chargesData, setChargesData] = useState([]);
    const [clientDetail, setClientDetail] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [openChargeModal, setOpenChargeModal] = useState(false);

    return (
        <PageContext.Provider
            value={{
                pageContent, setPageContent,
                open, setOpen,
                openModalClient, setOpenModalClient,
                openModalEditClient, setOpenModalEditClient,
                clientsData, setClientsData,
                headerTitle, setHeaderTitle,
                titleClassName, setTitleClassName,
                count, setCount,
                chargesData, setChargesData,
                modalProfile, setModalProfile,
                clientId, setClientId,
                clientName, setClientName,
                tableData, setTableData,
                openChargeModal, setOpenChargeModal
            }}
        >
            <div className="main-container">
                <EditClientModal />
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