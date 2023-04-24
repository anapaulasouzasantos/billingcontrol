import './styles.css';
import '../../../utils/global.css';
import ChargeIcon from '../../../assets/charge-icon.svg';
import FilterIcon from '../../../assets/filter-icon.svg';
import TableCharges from '../../TableCharges';

const ContentCharge = () => {
  return (
    <div className='container-page-charges-content flex-column'>
      <div className='top-charge-content flex-row'>
        <div className='flex-row'>
          <img src={ChargeIcon} alt='icon charge'></img>
          <h1>Cobranças</h1>
        </div>
        <div className='flex-row'>
          <img src={FilterIcon}></img>
          <input placeholder='Pesquisar'></input>
        </div>
      </div>
      <TableCharges></TableCharges>
    </div>
  )
}

export default ContentCharge

