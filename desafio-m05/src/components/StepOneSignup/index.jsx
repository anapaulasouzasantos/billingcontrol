import Input from '@mui/material/Input';
import './styles.css';

function StepOneSignup({ registerForm, setRegisterForm }) {
    const handleOnChangeRegisterForm = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }

    return (
        <>
            <h1>Adicione seus dados</h1>
            <label className='input-label'>Nome*</label>
            <Input
                className='input-base'
                name='name'
                type='text'
                disableUnderline={true}
                value={registerForm.name}
                placeholder='Digite seu nome'
                onChange={(e) => handleOnChangeRegisterForm(e)}
            />

            <label className='input-label'>Email*</label>
            <Input
                className='input-base'
                name='email'
                type='email'
                disableUnderline={true}
                value={registerForm.email}
                placeholder='Digite seu email'
                onChange={(e) => handleOnChangeRegisterForm(e)}
            />
        </>)
}


export default StepOneSignup