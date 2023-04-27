import SuccessIcon from '../../assets/success-client-register-icon.svg';
import CloseIcon from '../../assets/close-icon.svg';
import './SuccessClientRegister.css';

function SuccessClientRegister() {
    return (
        <div className='main-container-success'>
            <div className='div-successIcon-strong'>
                <img
                    src={SuccessIcon}
                    alt='Succes Icon'
                />
                <strong>
                    Cadastro concluído com sucesso
                </strong>
            </div>
            <img
                src={CloseIcon}
                alt='Close Icon'
            />
        </div>
    )
}

export default SuccessClientRegister;