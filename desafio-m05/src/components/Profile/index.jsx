import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import EditProfileIcone from '../../assets/edit-profile.svg';
import LogoutIcone from '../../assets/logout.svg';
import Polygon from '../../assets/polygon.svg';
import PageContext from '../../context/context.jsx';
import { clear } from '../../functions/storage';
import './Profile.css';

function Profilebox() {
    const navigate = useNavigate();
    const { setOpen } = useContext(PageContext);

    const logoutUser = () => {
        clear();
        navigate('/');
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