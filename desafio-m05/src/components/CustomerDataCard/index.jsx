import './customerDataCard.css';
import EditClients from '../../assets/edit-clients.svg';

const CustomerDataCard = () => {
    return (
        <div className='content-customer-data-card'>
            <div className='content-customer-data'>
                <div className='customer-data-header'>
                    <h3 className='customer-data-title'>Dados do Cliente</h3>
                    <button className='edit-customer-data-button' ><img src={EditClients} /> Editar Cliente</button>
                </div>
                <table className='first-table'>
                    <tr>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                    </tr>
                    <tr>
                        <td>sarasilva@gmail.com</td>
                        <td>71 9 9462 8654</td>
                        <td>054 365 255 87</td>
                    </tr>
                </table>
                <table className='second-table'>
                    <tr>
                        <th style={{ width: '24%' }}>Endereço</th>
                        <th style={{ width: '20%' }}>Bairro</th>
                        <th>Complemento</th>
                        <th>Cep</th>
                        <th>Cidade</th>
                        <th>UF</th>
                    </tr>
                    <tr>
                        <td>Rua das Cornélias; nº 512</td>
                        <td>Oliveiras</td>
                        <td>Ap: 502</td>
                        <td>031 654 524 04</td>
                        <td>Salvador</td>
                        <td>BA</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CustomerDataCard;