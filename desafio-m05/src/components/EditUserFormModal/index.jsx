import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import { useContext, useEffect, useState } from 'react';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../config/api';
import PageContext from '../../context/context';
import { getItem, setItem } from '../../functions/storage';
import './EditUserFormModal.css';

export default function EditUserForm() {
    const { setOpen, setModalProfile } = useContext(PageContext);
    const token = getItem('token');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const [userForm, setUserForm] = useState({
        name: '',
        email: '',
        cpf: '',
        tel: '',
        password: '',
        confirmPassword: ''
    });
    const [renderForm, setRenderForm] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmShowPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleOnChangeUserForm = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    }

    const handleCloseModal = () => {
        setOpen(false)
        setModalProfile(false)
    }

    useEffect(() => {
        async function getUserInfo() {
            const { data } = await api.get('/users', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            const newUserForm = Object.fromEntries(Object.entries(data[0]).filter(([key, value]) => {
                return value !== null && key !== 'id' && key !== 'password'
            }));

            setUserForm(newUserForm)
            setRenderForm(true);
        }

        if (!renderForm) {
            getUserInfo();
        }
    })

    async function handleSubmit() {
        const data = Object.fromEntries(Object.entries(userForm).filter(([key, value]) => {
            return value !== '' && key !== 'confirmPassword'
        }));
        const response = await api.put('/users', data, {
            headers: {
                authorization: `Bearer ${token}`
            }
        });

        setItem('email', response.data.email);
        setItem('name', response.data.name);
        setRenderForm(false);
        setOpen(false);
        setModalProfile(false);
    }

    return (
        <>
            {renderForm && <Box
                className='main-user-form-div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px'
                }}>
                <button
                    className='btn-close-modal-edit-user'
                    onClick={() => handleCloseModal()}
                >
                    <img
                        src={CloseIcon}
                        alt='Icon to close modal'
                    />
                </button>
                <h1>Edite seu cadastro</h1>
                <div className='container-edit-form'>
                    <div className='user-input-form'>
                        <span>Nome*</span>
                        <input
                            required
                            name='name'
                            placeholder='Digite seu nome'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.name}
                        />
                    </div>
                    <div className='user-input-form'>
                        <span>E-mail*</span>
                        <input
                            name='email'
                            placeholder='Digite o e-mail'
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.email}
                        />
                    </div>
                    <div className='cpf-tel-container-input'>
                        <div className='user-input-form' style={{ marginRight: '4%' }}>
                            <span>CPF*</span>
                            <input
                                name='cpf'
                                placeholder='Digite o CPF'
                                size='small'
                                onChange={(e) => handleOnChangeUserForm(e)}
                                value={userForm.cpf}
                            />
                        </div>
                        <div className='user-input-form'>
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
                    <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                        <div className='user-input-form'>
                            <span>Nova Senha*</span>
                            <input
                                required
                                name='password'
                                onChange={(e) => handleOnChangeUserForm(e)}
                                value={userForm.password}
                                type={showPassword ? 'password' : 'text'}
                            />
                            <button
                                className='visibility-btn'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                    </FormControl>
                    <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                        <div className='user-input-form'>
                            <span>Confirmar Senha*</span>
                            <input
                                required
                                name='confirmPassword'
                                onChange={(e) => handleOnChangeUserForm(e)}
                                value={userForm.confirmPassword}
                                type={showPassword ? 'password' : 'text'}
                            />
                            <button
                                className='visibility-btn'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                    </FormControl>
                    <button className='edit-user-form-btn'
                        onClick={() => handleSubmit()}
                    >
                        Aplicar
                    </button>
                </div>
            </Box>}
        </>
    );
}