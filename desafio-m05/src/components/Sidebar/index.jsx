import './styles.css';
import HomeIcon from '../../assets/home-icon.svg';
import ClientsIcon from '../../assets/clients-icon.svg';
import ChargeIcon from '../../assets/charge-icon.svg';

function Sidebar() {
    return (
        <aside>
            <button>
                <img
                    src={HomeIcon}
                    alt='Home Icon'
                />
                <strong>Home</strong>
            </button>
            <button>
                <img
                    src={ClientsIcon}
                    alt='Clients Icon'
                />
                <strong>Clientes</strong>
            </button>
            <button>
                <img
                    src={ChargeIcon}
                    alt='Charge Icon'
                />
                <strong>Cobranças</strong>
            </button>
        </aside>
    )
}

export default Sidebar;