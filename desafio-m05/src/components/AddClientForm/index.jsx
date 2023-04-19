import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import * as React from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import ClientsIcon from '../../assets/clients-icon.svg'
import './styles.css';
import PageContext from '../../context/context'
import { useContext } from 'react';
import api from '../../config/api'

export default function AddClientForm() {
    const { setOpenModalClient } = useContext(PageContext)
    const [userForm, setUserForm] = React.useState({
        name: '',
        email: '',
        cpf: '',
        tel: '',
        cep: '',
        street: '',
        complement: '',
        neighborhood: '',
        city: '',
        state: ''
    });

    const handleOnChangeUserForm = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    }

    async function handleSubmit(){
        const data = Object.fromEntries(Object.entries(userForm).filter(([key, value])=>{
            return value !== ''
        }));
        const response = await api.post('/clients', data);
    }

    return (
        <Box 
            className='main-div'
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '1%'
            }}>

            <div style={{ display: 'flex' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={ClientsIcon} style={{ width: '32px' }}></img>
                    <h1>Cadastro do Cliente</h1>
                </div>
                <button className='btn-close-modal' onClick={() => setOpenModalClient(false)}>
                    <img src={CloseIcon} alt='Icon to close modal' />
                </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='div-input-and-span'>
                    <span>Nome*</span>
                    <TextField
                       required
                        name='name'
                        placeholder='Digite seu nome'
                        sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.name}
                    />
                </div>
                <div className='div-input-and-span'>
                    <span>E-mail*</span>
                    <TextField
                        
                        name='email'
                        placeholder='Digite o e-mail'
                        sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.email}
                    />
                </div>
                <div className='main-div-input-and-span'>
                    <div className='div-input-and-span'>
                        <span>CPF*</span>
                        <TextField
                            
                            name='cpf'
                            placeholder='Digite o CPF'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cpf}
                        />
                    </div>
                    <div className='div-input-and-span'>
                        <span>Telefone*</span>
                        <TextField
                            name='tel'
                            placeholder='Digite o Telefone'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.tel}
                        />
                    </div>
                </div>
                <div className='div-input-and-span'>
                    <span>Endereço</span>
                    <TextField
                        name='street'
                        placeholder='Digite o endereço'
                        sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.street}
                    />
                </div>
                <div className='div-input-and-span'>
                    <span>Complemento</span>
                    <TextField
                        name='complement'
                        placeholder='Digite o complemento'
                        sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.complement}
                    />
                </div>
                <div className='main-div-input-and-span'>
                    <div className='div-input-and-span'>
                        <span>CEP</span>
                        <TextField
                            name='cep'
                            placeholder='Digite o CEP'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cep}
                        />
                    </div>
                    <div className='div-input-and-span'>
                        <span>Bairro</span>
                        <TextField
                            name='neighborhood'
                            placeholder='Digite o bairro'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.neighborhood}
                        />
                    </div>
                </div>
                <div className='main-div-input-and-span'>
                    <div className='div-input-and-span'>
                        <span>Cidade</span>
                        <TextField
                            name='city'
                            placeholder='Digite a cidade'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.city}
                        />
                    </div>
                    <div className='div-input-and-span'>
                        <span>UF</span>
                        <TextField
                            name='state'
                            placeholder='Digite a UF'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.state}
                        />
                    </div>
                </div>
            </div>
            <div className='container-btn-opt'>
                <button onClick={() => setOpenModalClient(false)}>
                    Cancelar
                </button>
                <button onClick={() => handleSubmit()}>
                    Aplicar
                </button>
            </div>
        </Box>
    );

}