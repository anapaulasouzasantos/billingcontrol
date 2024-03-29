import TableBillingSummary from '../TableBillingSummary'
import './CardBillingSummary.css';

const CardBillingSumary = ({ title, count, bgcolor, color }) => {
  return (
    <div className='container-billing-summary'>
      <div className='billing-summary-header'>
        <span className='billing-summary-title'>{title}</span>
        <span style={{ backgroundColor: bgcolor, color: color }} className='billing-summary-count'>{count}</span>
      </div>
      <div className='teste11'>
        <TableBillingSummary title={title}></TableBillingSummary>
        <span className='show-more'>Ver todos</span>
      </div>
    </div>
  )
}

export default CardBillingSumary;