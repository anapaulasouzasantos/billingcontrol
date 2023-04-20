import TableBilling from '../TableBilling'
import './styles.css';

const CardBillingSumary = ({ title, count, bgcolor, color }) => {
  return (
    <div className='container-billing-summary'>
      <div className='billing-summary-header'>
        <span className='billing-summary-title'>{title}</span>
        <span style={{ backgroundColor: bgcolor, color: color }} className='billing-summary-count'>{count}</span>
      </div>
      <TableBilling></TableBilling>
      <span className='show-more'>Ver todos</span>
    </div>
  )
}

export default CardBillingSumary;