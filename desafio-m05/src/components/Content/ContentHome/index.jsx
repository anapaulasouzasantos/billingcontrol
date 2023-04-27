import { useEffect, useState, useContext } from 'react';
import PageContext from '../../../context/context.jsx'
import DefaulterClientIcon from '../../../assets/defaulter-client-icon.svg';
import OverdueChargeIcon from '../../../assets/overdue-charge-icon.svg';
import PayedChargeIcon from '../../../assets/payed-charge-icon.svg';
import PayerClientIcon from '../../../assets/payer-client-icon.svg';
import PreviewChargeIcon from '../../../assets/preview-charge-icon.svg';
import CardAmount from '../../CardAmount';
import CardBillingSumary from '../../CardBillingSummary';
import CardClientSummary from '../../CardClientSummary';
import api from '../../../config/api.jsx';
import normalizeValue from '../../../functions/normalizeValue.jsx';
import './ContentHome.css';

const ContentHome = () => {
  const { setChargesData, setClientsData } = useContext(PageContext)
  const [overdueAmount, setOverdueAmount] = useState('');
  const [previewAmount, setPreviewAmount] = useState('');
  const [payedAmount, setPayedAmount] = useState('');
  const [overdueCount, setOverdueCount] = useState('');
  const [previewCount, setPreviewCount] = useState('');
  const [payedCount, setPayedCount] = useState('');

  useEffect(() => {
    handleApiData()
  },[])

  async function handleApiData() {

    const { data: billingsData } = await api.get('/billings');
    const { data: clientsData } = await api.get('/clients');

    const payed = billingsData.filter(billing => (billing.status == 'Paga'));
    const overdue = billingsData.filter(billing => (billing.status == 'Vencida'));
    const preview = billingsData.filter(billing => (billing.status == 'Pendente'));

    const payedData = payed.reduce((result, amount) => {
      return (result + amount.amount);
    }, 0);

    const overdueData = overdue.reduce((result, amount) => {
      return (result + amount.amount);
    }, 0);

    const previewData = preview.reduce((result, amount) => {
      return (result + amount.amount);
    }, 0);

    setPayedAmount(payedData);
    setOverdueAmount(overdueData);
    setPreviewAmount(previewData);
    setOverdueCount(overdue.length);
    setPreviewCount(preview.length);
    setPayedCount(payed.length);
    setChargesData(billingsData);
    setClientsData(clientsData);
  }

  return (
    <div className="teste">
      <div className='card-amount'>
        <CardAmount
          title={'Cobraças Pagas'}
          value={normalizeValue(payedAmount)}
          icon={PayedChargeIcon}
          bgcolor={'#EEF6F6'} />
        <CardAmount
          title={'Cobranças Vencidas'}
          value={normalizeValue(overdueAmount)}
          icon={OverdueChargeIcon}
          bgcolor={'#FFEFEF'} />
        <CardAmount
          title={'Cobranças Previstas'}
          value={normalizeValue(previewAmount)}
          icon={PreviewChargeIcon}
          bgcolor={'#FCF6DC'} />
      </div>
      <div className='card-billing-summary'>
        <CardBillingSumary
          title={'Cobranças Vencidas'}
          count={overdueCount}
          bgcolor={'#FFEFEF'}
          color={'#971D1D'} >
        </CardBillingSumary>
        <CardBillingSumary
          title={'Cobranças Previstas'}
          count={previewCount}
          bgcolor={'#FCF6DC'}
          color={'#C5A605'} >
        </CardBillingSumary>
        <CardBillingSumary
          title={'Cobranças Pagas'}
          count={payedCount}
          bgcolor={'#EEF6F6'}
          color={'#1FA7AF'} >
        </CardBillingSumary>
      </div>
      <div className='card-client-summary'>
        <CardClientSummary
          title={'Clientes Inadimplentes'}
          icon={DefaulterClientIcon}
          count={'08'}
          bgcolor={'#FFEFEF'}
          color={'#971D1D'}
        >
        </CardClientSummary>
        <CardClientSummary
          title={'Clientes em dia'}
          icon={PayerClientIcon}
          count={'08'}
          bgcolor={'#EEF6F6'}
          color={'#1FA7AF'}
        >
        </CardClientSummary>
      </div>
    </div>
  )
}

export default ContentHome;