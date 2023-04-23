import './styles.css';
import ClientsIcon from '../../../assets/clients-icon.svg'

const ContentClientsDetail = () => {
  return (
    <div className='container-content-clients-detail'>
        <div>
          <div>
            <img src={ClientsIcon} alt='client icon'></img>
            <h1>Sara Lage da Silva</h1>
          </div>
        </div>
    </div>
  )
}

export default ContentClientsDetail;