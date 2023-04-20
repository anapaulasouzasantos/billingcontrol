import TableClient from '../TableClient'
import './styles.css';

const CardClientSummary = ({ title, icon, count, bgcolor, color }) => {
  return (
    <div className='container-client-summary'>
      <div className='client-summary-header'>
        <div className='right-info'>
          <img src={icon} alt='client summary icon'></img>
          <span className='client-summary-title'>{title}</span>
        </div>
        <span style={{ backgroundColor: bgcolor, color: color }} className='client-summary-count'>{count}</span>
      </div>
      <TableClient></TableClient>
      <span className='show-more'>Ver todos</span>
    </div>
  )
}

export default CardClientSummary;