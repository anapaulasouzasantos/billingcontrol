import { useState, useContext } from 'react';
import PageContext from '../../context/context.jsx';
import ChargeIcon from '../../assets/charge-icon.svg';
import ClientsIcon from '../../assets/clients-icon.svg';
import HomeIcon from '../../assets/home-icon.svg';
import SelectedClientsIcon from '../../assets/selected-clients.svg';
import SelectedChargeIcon from '../../assets/selected-charge.svg';
import SelectedHomeIcon from '../../assets/selected-home.svg';
import api from '../../config/api.jsx';
import { getItem } from '../../functions/storage.jsx';
import './Sidebar.css';

function Sidebar() {
    const token = getItem('token');
    const [selectHomeIcon, setSelectHomeIcon] = useState(true);
    const [selectClientsIcon, setSelectClientsIcon] = useState(false);
    const [selectChargeIcon, setSelectChargeIcon] = useState(false);

    const {
        pageContent, setPageContent,
        setClientsData,
        setChargesData,
        setHeaderTitle,
        setTitleClassName } = useContext(PageContext);

    const handleClickHomeIcon = () => {
        setPageContent('home');
        setHeaderTitle('Resumo das Cobranças')
        setTitleClassName('home-title-style')
        setSelectHomeIcon(true);
        setSelectClientsIcon(false);
        setSelectChargeIcon(false);
    }

    const handleClickClientsIcon = () => {
        clientsTableData()
        setHeaderTitle('Clientes')
        setPageContent('clients');
        setTitleClassName('clients-title-style')
        setSelectHomeIcon(false);
        setSelectClientsIcon(true);
        setSelectChargeIcon(false);
    }

    const handleClickChargeIcon = () => {
        chargesTableData()
        setHeaderTitle('Cobranças')
        setPageContent('charge');
        setTitleClassName('charge-title-style')
        setSelectHomeIcon(false);
        setSelectClientsIcon(false);
        setSelectChargeIcon(true);
    }

    async function clientsTableData() {
        const response = await api.get('/clients', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        setClientsData(response.data);
    }

    async function chargesTableData() {
        const {data: billingsData} = await api.get('/billings', {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
       
        setChargesData(billingsData.billings);
    }

    return (
        <aside>
            <button
                className={selectHomeIcon && 'selected'}
                onClick={handleClickHomeIcon}
            >
                <img
                    src={selectHomeIcon ? SelectedHomeIcon : HomeIcon}
                    alt='Home Icon'
                />
                <strong>
                    Home
                </strong>
            </button>
            <button
                className={selectClientsIcon && 'selected'}
                onClick={handleClickClientsIcon}
            >
                <img
                    src={selectClientsIcon ? SelectedClientsIcon : ClientsIcon}
                    alt='Clients Icon'
                />
                <strong>
                    Clientes
                </strong>
            </button>
            <button
                className={selectChargeIcon && 'selected'}
                onClick={handleClickChargeIcon}
            >
                <img
                    src={selectChargeIcon ? SelectedChargeIcon : ChargeIcon}
                    alt='Charge Icon'
                />
                <strong>
                    Cobranças
                </strong>
            </button>
        </aside>
    )
}

export default Sidebar;