import OverdueChargeIcon from '../../../assets/overdue-charge-icon.svg';
import PayedChargeIcon from '../../../assets/payed-charge-icon.svg';
import PreviewChargeIcon from '../../../assets/preview-charge-icon.svg';
import CardAmount from '../../CardAmount';
import CardBillingSumary from '../../CardBillingSummary';
import CardClientSummary from '../../CardClientSummary';
import './styles.css';

const ContentHome = () => {
  return (
    <div className="teste">
      <div className='card-amount'>
        <CardAmount
          title={'Cobraças Pagas'}
          value={'R$ 30.000'}
          icon={PayedChargeIcon}
          bgcolor={'#EEF6F6'} />
        <CardAmount
          title={'Cobranças Vencidas'}
          value={'R$ 7.000'}
          icon={OverdueChargeIcon}
          bgcolor={'#FFEFEF'} />
        <CardAmount
          title={'Cobranças Previstas'}
          value={'R$ 10.000'}
          icon={PreviewChargeIcon}
          bgcolor={'#FCF6DC'} />
      </div>
      <div className='card-billing-summary'>
        <CardBillingSumary></CardBillingSumary>
        <CardBillingSumary></CardBillingSumary>
        <CardBillingSumary></CardBillingSumary>
      </div>
      <div className='card-client-summary'>
        <CardClientSummary></CardClientSummary>
        <CardClientSummary></CardClientSummary>
      </div>
    </div>
  )
}

export default ContentHome;