import { useContext } from 'react';
import DownArrow from '../../assets/down-arrow.svg';
import PageContext from '../../context/context.jsx';
import { getItem } from '../../functions/storage';
import LetterAvatars from '../Avatar';
import Profilebox from '../Profile';
import './Header.css';

function Header() {
    const name = getItem('name');
    const { open, headerTitle, titleClassName, modalProfile, setModalProfile } = useContext(PageContext);

    return (
        <header>
            <h1 className={titleClassName}>{headerTitle}</h1>
            <div className='profile-div'>
                <LetterAvatars />
                <span>{name}</span>
                <button
                    onClick={() => setModalProfile(!modalProfile)}
                >
                    <img
                        src={DownArrow}
                        alt='Down arrow profile'
                    />
                </button>
                {modalProfile && <Profilebox setOpen={open} />}
            </div>
        </header>
    )
}

export default Header;