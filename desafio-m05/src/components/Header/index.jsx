import './styles.css';
import LetterAvatars from '../Avatar';
import DownArrow from '../../assets/down-arrow.svg';
import Profilebox from '../Profile';
import { useState } from 'react';

function Header() {
    const [modalProfile, setModalProfile] = useState(false);

    return (
        <header>
            <h1>Resumo das cobranças</h1>
            <div className='profile-div'>
                <LetterAvatars />
                <span>Lorena</span>
                <button
                    onClick={() => setModalProfile(!modalProfile)}
                >
                    <img
                        src={DownArrow}
                        alt='Down arrow profile'
                    />
                </button>
                {modalProfile && <Profilebox />}
            </div>
        </header>
    )
}

export default Header;