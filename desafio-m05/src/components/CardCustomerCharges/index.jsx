import './CardCustomerCharges.css';
import ChargesTable from '../ChargesTable';

const CardCustomerCharges = () => {
    return (
        <div className='container-charges'>
            <div className='charges-header'>
                <span className='title'>Cobranças do Cliente</span>
                <button className='btn-new-charge'> + Nova Cobrança</button>
            </div>
            <ChargesTable />
        </div>
    )
}

export default CardCustomerCharges;