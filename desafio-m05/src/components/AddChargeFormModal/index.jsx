import { useState, useContext, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddChargeFormModal.css';
import FileIcon from '../../assets/file-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import PageContext from '../../context/context';
import { useForm } from 'react-hook-form';

export default function AddChargeFormModal() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    const { setOpenChargeModal } = useContext(PageContext);

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
                className='charge-modal-form'
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
                            name='dueDate'
                            {...register('dueData', {
                                required: true
                            })}
                            aria-invalid={errors.dueData ? "true" : "false"}
                            style={errors.dueData && { border: "1px solid red" }}
                        />
                        {errors.dueData?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
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
                            name='value'
                            {...register('value', {
                                required: true,
                                pattern: /^[0-9]/
                            })}
                            aria-invalid={errors.value ? "true" : "false"}
                            style={errors.value && { border: "1px solid red" }}
                        />
                        {errors.value?.type === 'required' && <p role="alert">Este campo deve ser preenchido</p>}
                        {errors.value?.type === 'pattern' && <p role="alert">Valor inválido</p>}
                    </div>
                </div>
                <div className='status-div'>
                    <label>Status*</label>
                    <fieldset className='radio-status-div'>
                        <div className='radio-div'>
                            <input
                                type='radio'
                                id='payed'
                                name='status'
                                value='payed'
                                checked
                                {...register('status')}
                            />
                            <label htmlFor="payed">
                                Cobrança Paga
                            </label>
                        </div>
                        <div className='radio-div'>
                            <input
                                type='radio'
                                id='pendent'
                                name='status'
                                value='pendent'
                                {...register('status')}
                            />
                            <label htmlFor="pendent">
                                Cobrança Pendente
                            </label>
                        </div>
                    </fieldset>
                </div>
                <div className='btn-div'>
                    <button
                        type='button'
                        className='cancel-btn'
                        onClick={handleClose}
                    >
                        Cancelar
                    </button>
                    <button
                        className='apply-btn'
                    >
                        Aplicar
                    </button>
                </div>
            </form>
        </Box>
    );
}