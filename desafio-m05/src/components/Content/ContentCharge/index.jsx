import ChargeIcon from '../../../assets/charge-icon.svg';
import FilterIcon from '../../../assets/filter-icon.svg';
import '../../../utils/global.css';
import Search from '../../Search';
import TableCharges from '../../TableCharges';
import './ContentCharge.css';

export default function ContentCharge() {
  return (
    <div className='container-content-charges'>
      <div className='content-top'>
        <div className='content-top-left'>
          <img src={ChargeIcon} alt='icon charge'></img>
          <span>Cobranças</span>
        </div>
        <div className='content-top-right'>
          <img src={FilterIcon}></img>
          <Search />
        </div>
      </div>
      <TableCharges></TableCharges>
    </div>
  )
}