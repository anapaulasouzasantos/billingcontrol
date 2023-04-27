import ClientsIcon from '../../../assets/clients-icon.svg';
import CardCustomerCharges from '../../CardCustomerCharges';
import './ContentClientsDetail.css';

const ContentClientsDetail = () => {
  return (
    <div className='container-content-clients-detail'>
      <div className='top-info'>
        <img src={ClientsIcon} alt='client icon'></img>
        <h1>Sara Lage da Silva</h1>
      </div>
      <div className='card-client-info'>Card dados do cliente</div>
      <div>
        <CardCustomerCharges></CardCustomerCharges>
      </div>
    </div>
  )
}

export default ContentClientsDetail;