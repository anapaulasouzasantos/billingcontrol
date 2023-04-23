import { useContext, useState } from 'react';
import ClientsIcon from '../../../assets/clients-icon.svg';
import FilterIcon from '../../../assets/filter-icon.svg';
import PageContext from '../../../context/context';
import TableClients from '../../TableClients';
import './styles.css';

const ContentClients = () => {
  const { setOpenModalClient, setModalClientTitle } = useContext(PageContext);
  const [renderTable, setRenderTable] = useState(true);

  function handleModalClient(){
    setOpenModalClient(true)
    setModalClientTitle('Cadastro do Cliente')
  }

  return (
    <div className='container-content-clients'>
      <div className='content-top'>
        <div className='content-top-right'>
          <img src={ClientsIcon}></img>
          <span>Clientes</span>
        </div>
        <div className='content-top-left'>
          <button
            className='add-client-btn'
            onClick={() => handleModalClient()}>
            + Adicionar cliente
          </button>
          <img src={FilterIcon} alt='filter icon' style={{ margin: ' 2%' }}></img>
          <input className='search-input' placeholder='  Pesquisa'></input>
        </div>
      </div>
      <div className='table-clients'>
        {renderTable && <TableClients />}
      </div>
    </div>
  )
}

export default ContentClients;