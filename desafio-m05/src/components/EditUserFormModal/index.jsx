import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import TextField from '@mui/material/TextField';
import CloseIcon from '../../assets/close-icon.svg';
import './styles.css';
import api from '../../config/api';
import { getItem, setItem } from '../../functions/storage';
import { useEffect, useState } from 'react';

export default function EditUserForm({ setOpen }) {
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

    useEffect(() => {
        async function getUserInfo() {
            const { data } = await api.get('/users', {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });
            data[0].password = ''
            setUserForm(...data)
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

        setItem('email', response.data.email)
        setItem('name', response.data.name)
        setRenderForm(false);
    }

    return (
        <>
            {renderForm && <Box
                className='main-div'
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    padding: '20px'
                }}>
                <button
                    className='btn-close-modal'
                    onClick={() => setOpen(false)}
                >
                    <img
                        src={CloseIcon}
                        alt='Icon to close modal'
                    />
                </button>
                <h1>Edite seu cadastro</h1>
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
                        required
                        name='email'
                        placeholder='Digite seu e-mail'
                        sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.email}
                    />
                </div>
                <div className='main-div-input-and-span'>
                    <div className='div-input-and-span'>
                        <span>CPF</span>
                        <TextField
                            name='cpf'
                            placeholder='Digite seu CPF'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.cpf}
                        />
                    </div>
                    <div className='div-input-and-span'>
                        <span>Telefone</span>
                        <TextField
                            name='tel'
                            placeholder='Digite seu Telefone'
                            sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                            size='small'
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.tel}
                        />
                    </div>
                </div>
                <div className='div-input-and-span'>
                    <span>Nova Senha*</span>
                    <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                        <OutlinedInput
                            required
                            name='password'
                            size='small'
                            type={showPassword ? 'password' : 'text'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.password}
                        />
                    </FormControl>
                </div>
                <div className='div-input-and-span'>
                    <span>Nova Senha*</span>
                    <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                        <OutlinedInput
                            required
                            name='confirmPassword'
                            size='small'
                            type={showConfirmPassword ? 'password' : 'text'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label="toggle password visibility"
                                        onClick={handleClickConfirmShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        edge="end"
                                    >
                                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            }
                            onChange={(e) => handleOnChangeUserForm(e)}
                            value={userForm.confirmPassword}
                        />
                    </FormControl>
                </div>
                <button className='edit-user-form-btn'
                    onClick={() => handleSubmit()}
                >
                    Aplicar
                </button>
            </Box>}
        </>
    );
}