import './Search.css'
import SearchIcon from '@mui/icons-material/Search'

export default function Search() {
    return (
        <>
            <div className='search-area'>
                <input className='search-input' placeholder='Pesquisar'></input>
                <button className='search-icon'><SearchIcon /></button>
            </div>
        </>
    )
}