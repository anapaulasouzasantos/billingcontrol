import * as React from 'react';
import { useContext } from 'react';
import ClientsIcon from '../../assets/clients-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import api from '../../config/api';
import PageContext from '../../context/context';
import { getItem } from '../../functions/storage.jsx';
import '../../utils/global.css';
import './ClientForm.css';
import { useForm } from 'react-hook-form';
import InputMask from 'react-input-mask';

export default function AddClientForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const { cpf } = data;

        const newData = { ...data, cpf: cpf.replace(/[.-]/g, '') }

        try {
            const formData = Object.fromEntries(Object.entries(newData).filter(([key, value]) => {
                return value !== ''
            }));

            const response = await api.post('/clients', formData, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            });

            setOpenModalClient(false);
        } catch (error) {
            console.log(error);
        }
    };

    const token = getItem('token');
    const { setOpenModalClient} = useContext(PageContext)
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

    // async function handleSubmit() {
    //     const data = Object.fromEntries(Object.entries(userForm).filter(([key, value]) => {
    //         return value !== ''
    //     }));
    //     const response = await api.post('/clients', data, {
    //         headers: {
    //             authorization: `Bearer ${token}`
    //         }
    //     });
    //     setOpenModalClient(false);
    // }

    return (
        <div className='container-modal'>
            <div className='modal-top'>
                <img src={ClientsIcon} ></img>
                <h1>Cadastro do Cliente</h1>
                <img
                    alt='Icon to close modal'
                    className='close-icon'
                    src={CloseIcon}
                    onClick={() => setOpenModalClient(false)} />
            </div>
            <form
                onSubmit={handleSubmit(onSubmit)}
            >
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
                        required: true
                    })}
                    aria-invalid={errors.name ? "true" : "false"}
                    style={errors.name && { border: "1px solid red" }}
                />
                {errors.name?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
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
                        required: true
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    style={errors.email && { border: "1px solid red" }}
                />
                {errors.email?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                <div className='group-div flex-row'>
                    <div>
                        <label
                            htmlFor='cpf-id'
                        >
                            CPF*
                        </label>
                        <InputMask
                            mask='999.999.999-99'
                            id='cpf-id'
                            name='cpf'
                            placeholder='Digite o CPF'
                            {...register('cpf', {
                                required: true
                            })}
                            aria-invalid={errors.cpf ? "true" : "false"}
                            style={errors.cpf && { border: "1px solid red" }}
                        />
                        {errors.cpf?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div>
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
                                required: true
                            })}
                            aria-invalid={errors.tel ? "true" : "false"}
                            style={errors.tel && { border: "1px solid red" }}
                        />
                        {errors.tel?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                </div>
                <label
                    htmlFor='address-id'
                >
                    Endereço
                </label>
                <input
                    id='address-id'
                    name='street'
                    placeholder='Digite o endereço'
                    {...register('street', {
                        required: true
                    })}
                    aria-invalid={errors.street ? "true" : "false"}
                    style={errors.street && { border: "1px solid red" }}
                />
                {errors.street?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                <label
                    htmlFor='address-complement-id'
                >
                    Complemento
                </label>
                <input
                    id='address-complement-id'
                    name='complement'
                    placeholder='Digite o endereço'
                    {...register('complement')}
                />
                <div className='group-div flex-row'>
                    <div>
                        <label htmlFor='cep-id'>
                            CEP
                        </label>
                        <input
                            id='cep-id'
                            name='cep'
                            placeholder='Digite o CEP'
                            {...register('cep', {
                                required: true
                            })}
                            aria-invalid={errors.cep ? "true" : "false"}
                            style={errors.cep && { border: "1px solid red" }}
                        />
                        {errors.cep?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div>
                        <label
                            htmlFor='neighborhood-id'
                        >
                            Bairro
                        </label>
                        <input
                            id='neighborhood-id'
                            name='neighborhood'
                            placeholder='Digite o bairro'
                            {...register('neighborhood', {
                                required: true
                            })}
                            aria-invalid={errors.neighborhood ? "true" : "false"}
                            style={errors.neighborhood && { border: "1px solid red" }}
                        />
                        {errors.neighborhood?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                </div>
                <div className='group-div flex-row'>
                    <div>
                        <label
                            htmlFor='city-id'
                        >
                            Cidade
                        </label>
                        <input
                            id='city-id'
                            name='city'
                            placeholder='Digite a cidade'
                            {...register('city', {
                                required: true
                            })}
                            aria-invalid={errors.city ? "true" : "false"}
                            style={errors.city && { border: "1px solid red" }}
                        />
                        {errors.city?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div>
                        <label
                            htmlFor='state-id'
                        >
                            UF
                        </label>
                        <input
                            id='state-id'
                            name='state'
                            placeholder='Digite a UF'
                            {...register('state', {
                                required: true
                            })}
                            aria-invalid={errors.state ? "true" : "false"}
                            style={errors.state && { border: "1px solid red" }}
                        />
                        {errors.state?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                </div>
                <div className='modal-bottom flex-row'>
                    <button className='button-cancel' onClick={() => setOpenModalClient(false)}>
                        Cancelar
                    </button>
                    <button className='button-aply'>
                        Aplicar
                    </button>
                </div>
            </form>
        </div>
    );

}