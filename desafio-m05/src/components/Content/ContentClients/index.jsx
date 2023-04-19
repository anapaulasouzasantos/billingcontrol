import './styles.css';
import FilterIcon from '../../../assets/filter-icon.svg'
import ClientsIcon from '../../../assets/clients-icon.svg'
import TableClients from '../../TableClients'

const ContentClients = () => {
  return (
    <div className='container-content-clients'>
      <div className='content-top'>
        <div className='content-top-right'>
          <img src={ClientsIcon}></img>
          <span>Clientes</span>
        </div>
        <div className='content-top-left'>
          <button className='add-client-btn'>+ Adicionar cliente</button>
          <img src={FilterIcon}></img>
          <input className='search-input' placeholder='Pesquisa'></input>
        </div>
      </div>
      <div className='table-clients'>
        <TableClients></TableClients>
      </div>
    </div>
  )
}

export default ContentClients;