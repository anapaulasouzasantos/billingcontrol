import TableBilling from '../TableBilling'
import './styles.css';

const CardBillingSumary = ({ title, count }) => {
  return (
    <div className='container-billing-summary'>
      <div className='billing-summary-header'>
        <span className='billing-summary-title'>{title}</span>
        <span className='billing-summary-count'>{count}</span>
      </div>
      <TableBilling></TableBilling>
      <span className='show-more'>Ver todos</span>
    </div>
  )
}

export default CardBillingSumary;