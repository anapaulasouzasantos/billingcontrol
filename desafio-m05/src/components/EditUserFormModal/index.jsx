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
import './styles.css';

export default function EditUserForm({ setOpen }) {
    const [showPassword, setShowPassword] = React.useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(true);
    const [userForm, setUserForm] = React.useState({
        name: '',
        email: '',
        cpf: '',
        telephone: '',
        newPassword: '',
        confirmPassword: ''
    });

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmShowPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleOnChangeUserForm = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
    }

    return (
        <Box
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
                        name='telephone'
                        placeholder='Digite seu Telefone'
                        sx={{ m: 1, width: '178px', margin: '6px 0 0 0' }}
                        size='small'
                        onChange={(e) => handleOnChangeUserForm(e)}
                        value={userForm.telephone}
                    />
                </div>
            </div>
            <div className='div-input-and-span'>
                <span>Nova Senha*</span>
                <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                    <OutlinedInput
                        required
                        name='newPassword'
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
                        value={userForm.newPassword}
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
                onClick={() => console.log(userForm)}
            >
                Aplicar
            </button>
        </Box>
    );
}