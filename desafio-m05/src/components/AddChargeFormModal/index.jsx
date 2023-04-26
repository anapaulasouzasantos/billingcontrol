import { useState, useContext } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import './AddChargeFormModal.css';
import FileIcon from '../../assets/file-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import PageContext from '../../context/context';

export default function AddChargeFormModal() {
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
            <form className='charge-modal-form'>
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
                    for='name-id'
                >
                    Nome*
                </label>
                <input
                    placeholder='Digite seu nome'
                    type='text'
                    id='name-id'
                    name='name'
                    value={chargeForm.name}
                    required
                    onChange={(e) => handleChangeForm(e)}
                />
                <div className='description-div'>
                    <label
                        for='description-id'
                    >
                        Descrição*
                    </label>
                    <textarea
                        placeholder='Digite a descrição'
                        type='text'
                        id='description-id'
                        className='description'
                        name='description'
                        value={chargeForm.description}
                        required
                        onChange={(e) => handleChangeForm(e)}
                    />
                </div>
                <div className='row-div'>
                    <div className='due-data-div'>
                        <label
                            for='due-date-id'
                        >
                            Vencimento:*
                        </label>
                        <input
                            placeholder='Data de Vencimento'
                            type='text'
                            id='due-date-id'
                            name='dueDate'
                            value={chargeForm.dueDate}
                            required
                            onChange={(e) => handleChangeForm(e)}
                        />
                    </div>
                    <div className='value-div'>
                        <label
                            for='value-id,'
                        >
                            Valor:*
                        </label>
                        <input
                            placeholder='Digite o valor'
                            type='text'
                            id='value-id,'
                            name='value'
                            value={chargeForm.value}
                            required
                            onChange={(e) => handleChangeForm(e)}
                        />
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
                                onChange={(e) => handleChangeForm(e)}
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
                                onChange={(e) => handleChangeForm(e)}
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
                        type='button'
                        className='apply-btn'
                    >
                        Aplicar
                    </button>
                </div>
            </form>
        </Box>
    );
}