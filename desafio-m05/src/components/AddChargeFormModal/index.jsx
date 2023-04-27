import { useState, useContext, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddChargeFormModal.css';
import FileIcon from '../../assets/file-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import PageContext from '../../context/context';
import { useForm } from 'react-hook-form';
import api from '../../config/api';
import { getItem } from '../../functions/storage';

export default function AddChargeFormModal() {
    const token = getItem('token');
    const { setOpenChargeModal } = useContext(PageContext);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        // try {
        //     const response = await api.post('/billings', data, {
        //         headers: {
        //             Authorization: token
        //         }
        //     });

        //     setOpenChargeModal(false);
        // } catch (error) {
        //     console.log(error.message);
        // }
    };

    const [chargeForm, setChargeForm] = useState({
        name: '',
        description: '',
        dueDate: '',
        value: '',
        status: ''
    });

    const handleChangeForm = (e) => {
        setChargeForm({ ...chargeForm, [e.target.name]: e.target.value });
    }

    const handleClose = () => {
        setOpenChargeModal(false);
        setChargeForm({
            name: '',
            description: '',
            dueDate: '',
            value: '',
            status: ''
        });
    }

    return (
        <Box sx={{
            position: 'relative',
            width: '100%',
            height: '100%'
        }}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='modal-form'
            >
                <div className='header-charge-modal-form'>
                    <img
                        src={FileIcon}
                        alt='File Icon'
                    />
                    <h1>
                        Cadastro de Cobrança
                    </h1>
                    <img
                        className='close-icon-charge-modal'
                        src={CloseIcon}
                        alt='Close Icon'
                        onClick={handleClose}
                    />
                </div>
                <div className='name-div'>
                    <label
                        htmlFor='name-id'
                    >
                        Nome*
                    </label>
                    <input
                        placeholder='Digite seu nome'
                        type='text'
                        id='name-id'
                        name='name'
                        {...register('name', {
                            required: true
                        })}
                        aria-invalid={errors.name ? "true" : "false"}
                        style={errors.name && { border: "1px solid red" }}
                    />
                    {errors.name?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                </div>
                <div className='description-div'>
                    <label
                        htmlFor='description-id'
                    >
                        Descrição*
                    </label>
                    <textarea
                        placeholder='Digite a descrição'
                        type='text'
                        id='description-id'
                        className='description'
                        name='description'
                        {...register('description', {
                            required: true
                        })}
                        aria-invalid={errors.description ? "true" : "false"}
                        style={errors.description && { border: "1px solid red" }}
                    />
                    {errors.description?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                </div>
                <div className='row-div'>
                    <div className='due-data-div'>
                        <label
                            htmlFor='due-date-id'
                        >
                            Vencimento:*
                        </label>
                        <input
                            type='date'
                            id='due-date-id'
                            name='due_date'
                            {...register('due_data', {
                                required: true
                            })}
                            aria-invalid={errors.due_data ? "true" : "false"}
                            style={errors.due_data && { border: "1px solid red" }}
                        />
                        {errors.due_data?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                    </div>
                    <div className='value-div'>
                        <label
                            htmlFor='value-id,'
                        >
                            Valor:*
                        </label>
                        <input
                            placeholder='Digite o valor'
                            type='number'
                            id='value-id,'
                            name='amount'
                            {...register('amount', {
                                required: true,
                                pattern: /^[0-9]/
                            })}
                            aria-invalid={errors.amount ? "true" : "false"}
                            style={errors.amount && { border: "1px solid red" }}
                        />
                        {errors.amount?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                        {errors.amount?.type === 'pattern' && <p role="alert">Valor inválido</p>}
                    </div>
                </div>
                <div className='status-div'>
                    <label>Status*</label>
                    <fieldset className='radio-status-div'>
                        <div className='radio-div'>
                            <input
                                type='radio'
                                id='payed-id'
                                name='status'
                                checked
                                {...register('status', {
                                    value: 'payed'
                                })}
                            />
                            <label htmlFor='payed-id'>
                                Cobrança Paga
                            </label>
                        </div>
                        <div className='radio-div'>
                            <input
                                type='radio'
                                id='pendent-id'
                                name='status'
                                value='pendent'
                                {...register('status', {
                                    value: 'pendent'
                                })}
                            />
                            <label htmlFor='pendent-id'>
                                Cobrança Pendente
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className='btn-div'>
                    <button
                        type='button'
                        className='cancel-btn button-cancel'
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className='apply-btn button-aply'
                    >
                        Aplicar
                    </button>
                </div>
            </form>
        </Box>
    );
}