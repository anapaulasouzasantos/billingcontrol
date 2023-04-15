import './styles.css'
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

function Main() {
    return (
        <div className="main-container">
            <Header />
            <Sidebar />
        </div>
    )
}

export default Main;