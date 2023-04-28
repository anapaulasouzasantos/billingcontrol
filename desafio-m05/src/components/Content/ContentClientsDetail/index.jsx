import { useContext } from 'react';
import ClientsIcon from '../../../assets/clients-icon.svg';
import PageContext from '../../../context/context.jsx';
import CardCustomerCharges from '../../CardCustomerCharges';
import CustomerDataCard from '../../CustomerDataCard';
import './ContentClientsDetail.css';

const ContentClientsDetail = () => {
  const { clientName } = useContext(PageContext);
  
  return (
    <div className='container-content-clients-detail'>
      <div className='top-info'>
        <img src={ClientsIcon} alt='client icon'></img>
        <h1>{clientName}</h1>
      </div>
      <div className='card-client-info'>
        <CustomerDataCard></CustomerDataCard>
      </div>
      <div className='card-customer-charges'>
        <CardCustomerCharges></CardCustomerCharges>
      </div>
    </div>
  )
}

export default ContentClientsDetail;