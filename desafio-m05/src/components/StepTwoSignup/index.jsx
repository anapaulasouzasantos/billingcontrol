import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';
import './StepTwoSignUp.css';

function StepTwoSignup({ registerForm, setRegisterForm }, error) {

    const handleOnChangeRegisterForm = (e) => {
        setRegisterForm({ ...registerForm, [e.target.name]: e.target.value });
    }

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const handleMouseDownPassword = (e) => {
        e.preventDefault();
    };

    const handleMouseDownConfirmPassword = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <div className='form-area'>
                <h1 className='step-title'>Escolha uma senha</h1>
                <label className='password-label'>Senha*</label>
                <Input
                    className='input-base'
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    disableUnderline={true}
                    placeholder='Digite sua senha'
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
                    onChange={(e) => handleOnChangeRegisterForm(e)}
                />

                <label className='password-label'>Repita a senha*</label>
                <Input
                    className='input-base'
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    disableUnderline={true}
                    placeholder='Repita sua senha'
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton
                                aria-label="toggle confirm password visibility"
                                onClick={handleClickShowConfirmPassword}
                                onMouseDown={handleMouseDownConfirmPassword}
                                edge="end"
                            >
                                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                    }
                    onChange={(e) => handleOnChangeRegisterForm(e)}
                />
            </div>
        </>)
}

export default StepTwoSignup