import './CardCustomerCharges.css';
import ChargesTable from '../ChargesTable';
import PageContext from '../../context/context';
import { useContext } from 'react';

const CardCustomerCharges = () => {
    const { setOpenChargeModal } = useContext(PageContext);
    return (
        <div className='container-charges'>
            <div className='charges-header'>
                <span className='title'>Cobranças do Cliente</span>
                <button className='btn-new-charge' onClick={()=>setOpenChargeModal(true)}> + Nova Cobrança</button>
            </div>
            <ChargesTable />
        </div>
    )
}

export default CardCustomerCharges;