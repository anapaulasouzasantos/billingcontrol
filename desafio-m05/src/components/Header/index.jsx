import './styles.css';
import LetterAvatars from '../Avatar';
import DownArrow from '../../assets/down-arrow.svg';

function Header() {
    return (
        <header>
            <h1>Resumo das cobranças</h1>
            <div className='profile-div'>
                <LetterAvatars />
                <span>Lorena</span>
                <button>
                    <img
                        src={DownArrow}
                        alt='Down arrow profile'
                    />
                </button>
            </div>
        </header>
    )
}

export default Header;