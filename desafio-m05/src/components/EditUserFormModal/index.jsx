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
import { useForm } from 'react-hook-form';

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
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
            const newData = Object.fromEntries(Object.entries(data).filter(([key, value]) => {
                return value !== '' && key !== 'confirmPassword'
            }));
            const response = await api.put('/users', newData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            setItem('email', response.data.email);
            setItem('name', response.data.name);
            setRenderForm(false);
            setOpen(false);
            setModalProfile(false);

        } catch (error) {
            console.log(error.message);
        }
    };

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickConfirmShowPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

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

    // async function handleSubmit() {
    //     const data = Object.fromEntries(Object.entries(userForm).filter(([key, value]) => {
    //         return value !== '' && key !== 'confirmPassword'
    //     }));
    //     const response = await api.put('/users', data, {
    //         headers: {
    //             authorization: `Bearer ${token}`
    //         }
    //     });

    //     setItem('email', response.data.email);
    //     setItem('name', response.data.name);
    //     setRenderForm(false);
    //     setOpen(false);
    //     setModalProfile(false);
    // }

    return (
        <>
            {renderForm && <Box
                className='main-user-form-div'
                sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%'
                }}>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='modal-form edit-user-form'
                >
                    <div className='header-charge-modal-form'>
                        <button
                            className='close-icon-charge-modal'
                            onClick={() => handleCloseModal()}
                        >
                            <img
                                src={CloseIcon}
                                alt='Icon to close modal'
                            />
                        </button>
                        <h1>Edite seu cadastro</h1>
                    </div>
                    <div className='user-input-form'>
                        <label
                            htmlFor='name-id'
                        >
                            Nome*

                        </label>
                        <input
                            id='name-id'
                            name='name'
                            placeholder='Digite seu nome'
                            {...register('name', {
                                value: userForm.name,
                                required: true
                            })}
                            aria-invalid={errors.name ? "true" : "false"}
                            style={errors.name && { border: "1px solid red" }}
                        />
                        {errors.name?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div className='user-input-form'>
                        <label
                            htmlFor='email-id'
                        >
                            E-mail*

                        </label>
                        <input
                            id='email-id'
                            name='email'
                            placeholder='Digite o e-mail'
                            {...register('email', {
                                value: userForm.email,
                                required: true
                            })}
                            aria-invalid={errors.email ? "true" : "false"}
                            style={errors.email && { border: "1px solid red" }}
                        />
                        {errors.email?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div className='cpf-tel-container-input'>
                        <div className='user-input-form' style={{ marginRight: '4%' }}>
                            <label
                                htmlFor='cpf-id'
                            >
                                CPF*

                            </label>
                            <input
                                id='cpf-id'
                                name='cpf'
                                placeholder='Digite o CPF'
                                {...register('cpf', {
                                    value: userForm.cpf,
                                    required: true
                                })}
                                aria-invalid={errors.cpf ? "true" : "false"}
                                style={errors.cpf && { border: "1px solid red" }}
                            />
                            {errors.cpf?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                        </div>
                        <div className='user-input-form'>
                            <label
                                htmlFor='tel-id'
                            >
                                Telefone*

                            </label>
                            <input
                                id='tel-id'
                                name='tel'
                                placeholder='Digite o Telefone'
                                {...register('tel', {
                                    value: userForm.tel,
                                    required: true
                                })}
                                aria-invalid={errors.tel ? "true" : "false"}
                                style={errors.tel && { border: "1px solid red" }}
                            />
                            {errors.tel?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                        </div>
                    </div>
                    <FormControl sx={{ m: 1, width: '100%', margin: '6px 0 0 0' }} variant="outlined">
                        <div className='user-input-form'>
                            <label
                                htmlFor='password-id'
                            >
                                Nova Senha*

                            </label>
                            <input
                                id='password-id'
                                name='password'
                                placeholder='Digite sua senha'
                                type={showPassword ? 'password' : 'text'}
                                {...register('password', {
                                    required: true
                                })}
                                aria-invalid={errors.password ? "true" : "false"}
                                style={errors.password && { border: "1px solid red" }}
                            />
                            {errors.password?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
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
                            <label
                                htmlFor='confirmPassword-id'
                            >
                                Confirmar Senha*

                            </label>
                            <input
                                id='confirmPassword-id'
                                name='confirmPassword'
                                placeholder='Confirme sua senha'
                                type={showPassword ? 'password' : 'text'}
                                {...register('confirmPassword', {
                                    required: true
                                })}
                                aria-invalid={errors.confirmPassword ? "true" : "false"}
                                style={errors.confirmPassword && { border: "1px solid red" }}
                            />
                            {errors.confirmPassword?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                            <button
                                className='visibility-btn'
                                onClick={handleClickShowPassword}
                                onMouseDown={handleMouseDownPassword}
                            >
                                {showPassword ? <VisibilityOff /> : <Visibility />}
                            </button>
                        </div>
                    </FormControl>
                    <button className='edit-user-form-btn'>
                        Aplicar
                    </button>
                </form>
            </Box>}
        </>
    );
}