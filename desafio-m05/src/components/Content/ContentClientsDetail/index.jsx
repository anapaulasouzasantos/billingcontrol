import './styles.css';
import ClientsIcon from '../../../assets/clients-icon.svg';
import CustomerDataCard from '../../CustomerDataCard';
import CardCustomerCharges from '../../CardCustomerCharges';
import PageContext from '../../../context/context.jsx';
import { useContext, useEffect } from 'react';

const ContentClientsDetail = () => {
  const { clientId } = useContext(PageContext);

  return (
    <div className='container-content-clients-detail'>
      <div className='top-info'>
        <img src={ClientsIcon} alt='client icon'></img>
        <h1>{clientId}</h1>
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