import './styles.css';
import HomeIcon from '../../assets/home-icon.svg';
import SelectedHomeIcon from '../../assets/selected-home.svg';
import ClientsIcon from '../../assets/clients-icon.svg';
import SelectedClientsIcon from '../../assets/selected-clients.svg';
import ChargeIcon from '../../assets/charge-icon.svg';
import { useState } from 'react';

function Sidebar() {
    const [selectHomeIcon, setSelectHomeIcon] = useState(true);
    const [selectClientsIcon, setSelectClientsIcon] = useState(false);
    const [selectChargeIcon, setSelectChargeIcon] = useState(false);

    const handleClickHomeIcon = () => {
        setSelectHomeIcon(true);
        setSelectClientsIcon(false);
        setSelectChargeIcon(false);
    }

    const handleClickClientsIcon = () => {
        setSelectHomeIcon(false);
        setSelectClientsIcon(true);
        setSelectChargeIcon(false);
    }

    const handleClickChargeIcon = () => {
        setSelectHomeIcon(false);
        setSelectClientsIcon(false);
        setSelectChargeIcon(true);
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
            <button>
                <img
                    src={ChargeIcon}
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