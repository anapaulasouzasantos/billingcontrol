import { useContext, useEffect, useState } from 'react';
import EditClients from '../../assets/edit-clients.svg';
import api from '../../config/api';
import PageContext from '../../context/context.jsx';
import './customerDataCard.css';
import { getItem } from '../../functions/storage';


const CustomerDataCard = () => {
    const token = getItem('token')
    const {
        clientId,
        setClientName,
        setOpenModalEditClient,
        openModalEditClient,
        tableData,
        setTableData } = useContext(PageContext);

    useEffect(() => {
        handleTableData()
    }, [openModalEditClient])

    async function handleTableData() {
        const data = await api.get(`/clients/${clientId}`, {
            headers: {
                authorization: `Bearer ${token}`,
            }
        })
        setTableData(data.data)
        setClientName(data.data.name)
    }

    function handleEditClientButton() {
        setOpenModalEditClient(true);
    }

    return (
        <div className='content-customer-data-card'>
            <div className='content-customer-data'>
                <div className='customer-data-header'>
                    <h3 className='customer-data-title'>Dados do Cliente</h3>
                    <button
                        className='edit-customer-data-button'
                        onClick={() => handleEditClientButton()}
                    >
                        <img src={EditClients} alt='edit client icon' /> Editar Cliente
                    </button>
                </div>
                <table className='first-table'>
                    <tr>
                        <th>E-mail</th>
                        <th>Telefone</th>
                        <th>CPF</th>
                    </tr>
                    <tr>
                        <td>{tableData?.email}</td>
                        <td>{tableData.tel}</td>
                        <td>{tableData.cpf}</td>
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
                        <td>{tableData.street}</td>
                        <td>{tableData.neighborhood}</td>
                        <td>{tableData.complement}</td>
                        <td>{tableData.cep}</td>
                        <td>{tableData.city}</td>
                        <td>{tableData.state}</td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default CustomerDataCard;