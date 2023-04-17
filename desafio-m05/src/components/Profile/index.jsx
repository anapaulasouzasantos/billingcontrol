import './styles.css';
import Polygon from '../../assets/polygon.svg';
import EditProfileIcone from '../../assets/edit-profile.svg';
import LogoutIcone from '../../assets/logout.svg';

function Profilebox() {
    return (
        <div className='box'>
            <img
                src={Polygon}
                alt='Polygon'
            />
            <div className='edit-and-logout'>
                <button>
                    <img
                        src={EditProfileIcone}
                        alt='Edit profile icone'
                    />
                </button>
                <button>
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