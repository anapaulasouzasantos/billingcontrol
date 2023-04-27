import TableClientSummary from '../TableClientSummary'
import './CardClientSummary.css';

const CardClientSummary = ({ title, icon, count, bgcolor, color, setCount }) => {
  return (
    <div className='container-client-summary'>
      <div className='client-summary-header'>
        <div className='right-info'>
          <img src={icon} alt='client summary icon'></img>
          <span className='client-summary-title'>{title}</span>
        </div>
        <span style={{ backgroundColor: bgcolor, color: color }} className='client-summary-count'>{count}</span>
      </div>
      <TableClientSummary title={title} setCount={setCount}></TableClientSummary>
      <span className='show-more'>Ver todos</span>
    </div>
  )
}

export default CardClientSummary;