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

    async function handleSubmit() {
        const data = Object.fromEntries(Object.entries(userForm).filter(([key, value]) => {
            return value !== ''
        }));
        const response = await api.post('/clients', data);
        setOpenModalClient(false)
    }

    return (
        <Box
            className='main-div'
            sx={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                position: 'relative',
                padding: '1px'
            }}>
            <div className='container-top'>
                <div className='container-top-right'>
                    <img src={ClientsIcon} style={{ width: '32px' }}></img>
                    <h1>Cadastro do Cliente</h1>
                </div>
                <button className='btn-close-modal' onClick={() => setOpenModalClient(false)}>
                    <img src={CloseIcon} alt='Icon to close modal' />
                </button>
            </div>

            <div className='container-form'>
                <div className='input-form'>
                    <span>Nome*</span>
                    <input
                        required
                        name='name'
                        placeholder='Digite seu nome'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.name}
                    />
                </div>
                <div className='input-form'>
                    <span>E-mail*</span>
                    <input
                        name='email'
                        placeholder='Digite o e-mail'
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.email}
                    />
                </div>
                <div className='d-container-input'>
                    <div className='input-form' style={{ marginRight: '4%' }}>
                        <span>CPF*</span>
                        <input
                            name='cpf'
                            placeholder='Digite o CPF'
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cpf}
                        />
                    </div>
                    <div className='input-form'>
                        <span>Telefone*</span>
                        <input
                            name='tel'
                            placeholder='Digite o Telefone'
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.tel}
                        />
                    </div>
                </div>
                <div className='input-form'>
                    <span>Endereço</span>
                    <input
                        name='street'
                        placeholder='Digite o endereço'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.street}

                    />
                </div>
                <div className='input-form' >
                    <span>Complemento</span>
                    <input
                        name='complement'
                        placeholder='Digite o complemento'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.complement}

                    />
                </div>
                <div className='d-container-input'>
                    <div className='input-form' style={{ marginRight: '4%' }}>
                        <span>CEP</span>
                        <input
                            name='cep'
                            placeholder='Digite o CEP'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cep}
                        />
                    </div>
                    <div className='input-form'>
                        <span>Bairro</span>
                        <input
                            name='neighborhood'
                            placeholder='Digite o bairro'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.neighborhood}
                        />
                    </div>
                </div>
                <div className='d-container-input'>
                    <div className='input-form' style={{ marginRight: '4%' }}>
                        <span>Cidade</span>
                        <input
                            name='city'
                            placeholder='Digite a cidade'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.city}
                        />
                    </div>
                    <div className='input-form'>
                        <span>UF</span>
                        <input
                            name='state'
                            placeholder='Digite a UF'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.state}
                        />
                    </div>
                </div>
            </div>
            <div className='container-btn-opt'>
                <button className='cancel-btn' onClick={() => setOpenModalClient(false)}>
                    Cancelar
                </button>
                <button className='aply-btn' onClick={() => handleSubmit()}>
                    Aplicar
                </button>
            </div>
        </Box>
    );

}