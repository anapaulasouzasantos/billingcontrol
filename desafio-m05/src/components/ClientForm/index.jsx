import * as React from 'react';
import { useContext } from 'react';
import ClientsIcon from '../../assets/clients-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../config/api';
import PageContext from '../../context/context';
import { getItem } from '../../functions/storage.jsx';
import '../../utils/global.css';
import './styles.css';

export default function AddClientForm() {
    const token = getItem('token');
    const { setOpenModalClient, modalClientTitle } = useContext(PageContext)
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
        const response = await api.post('/clients', data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });
        setOpenModalClient(false);
    }

    return (
        <div className='container-modal'>
            <div className='modal-top'>
                <img src={ClientsIcon} ></img>
                <h1>{modalClientTitle}</h1>
                <img
                    alt='Icon to close modal'
                    className='close-icon'
                    src={CloseIcon}
                    onClick={() => setOpenModalClient(false)} />
            </div>
            <form>
                <label >Nome*
                    <input
                        required
                        name='name'
                        placeholder='Digite seu nome'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.name}
                    />
                </label>
                <label>E-mail*
                    <input
                        name='email'
                        placeholder='Digite o e-mail'
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.email}
                    />
                </label>
                <div className='group-div flex-row'>
                    <label>CPF*
                        <input
                            name='cpf'
                            placeholder='Digite o CPF'
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cpf}
                        />
                    </label>
                    <label>Telefone*
                        <input
                            name='tel'
                            placeholder='Digite o Telefone'
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.tel}
                        />
                    </label>
                </div>
                <label>Endereço
                    <input
                        name='street'
                        placeholder='Digite o endereço'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.street}
                    />
                </label>
                <label>Complemento
                    <input
                        name='street'
                        placeholder='Digite o endereço'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.street}
                    />
                </label>
                <div className='group-div flex-row'>
                    <label>CEP
                        <input
                            name='cep'
                            placeholder='Digite o CEP'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cep}
                        />
                    </label>
                    <label>Bairro
                        <input
                            name='neighborhood'
                            placeholder='Digite o bairro'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.neighborhood}
                        />
                    </label>
                </div>
                <div className='group-div flex-row'>
                    <label>Cidade
                        <input
                            name='city'
                            placeholder='Digite a cidade'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.city}
                        />
                    </label>
                    <label>UF
                        <input
                            name='state'
                            placeholder='Digite a UF'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.state}
                        />
                    </label>
                </div>
            </form>
            <div className='modal-bottom flex-row'>
                <button className='button-cancel' onClick={() => setOpenModalClient(false)}>
                    Cancelar
                </button>
                <button className='button-aply' onClick={() => handleSubmit()}>
                    Aplicar
                </button>
            </div>
        </div>
    );

}