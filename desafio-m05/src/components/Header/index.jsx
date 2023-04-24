import './styles.css';
import LetterAvatars from '../Avatar';
import DownArrow from '../../assets/down-arrow.svg';
import Profilebox from '../Profile';
import { useState, useContext } from 'react';
import { getItem } from '../../functions/storage';
import PageContext from '../../context/context.jsx';

function Header() {
    const name = getItem('name');
    const { open, headerTitle,titleClassName } = useContext(PageContext);
    const [modalProfile, setModalProfile] = useState(false);

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