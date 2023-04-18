import defaulterClientIcon from '../../assets/defaulter-client-icon.svg';
import CardClientSummary from '../../components/CardClientSummary';
import './styles.css';

function Teste() {
    return (
        <div>
           <CardClientSummary icon={defaulterClientIcon} title={'Clientes Inadimplentes'} count={'08'}/>
        </div>
    )
}

export default Teste;