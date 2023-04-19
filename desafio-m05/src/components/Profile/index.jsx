import './styles.css';
import Polygon from '../../assets/polygon.svg';
import EditProfileIcone from '../../assets/edit-profile.svg';
import LogoutIcone from '../../assets/logout.svg';
import PageContext from '../../context/context.jsx';
import { useContext, useEffect} from 'react';
import { removeItem } from '../../functions/storage';

function Profilebox() {
    const { setOpen } = useContext(PageContext);

    const logoutUser = () => {
        removeItem('token');
        removeItem('name');
        removeItem('email');
        window.location.reload(true);
    }

    return (
        <div className='box'>
            <img
                src={Polygon}
                alt='Polygon'
            />
            <div className='edit-and-logout'>
                <button onClick={() => setOpen(true)}>
                    <img
                        src={EditProfileIcone}
                        alt='Edit profile icone'
                    />
                </button>
                <button onClick={() => logoutUser()}>
                    <img
                        src={LogoutIcone}
                        alt='logout icone'
                    />
                </button>
            </div>
        </div>
    )
}

export default Profilebox;