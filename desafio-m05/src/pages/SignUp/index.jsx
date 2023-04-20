import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import StepConnector from '@mui/material/StepConnector';
import StepContent from '@mui/material/StepContent';
import StepLabel from '@mui/material/StepLabel';
import Stepper from '@mui/material/Stepper';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import StepIconActive from '../../assets/step-icon-active.svg';
import StepIconComplete from '../../assets/step-icon-complete.svg';
import StepIconNext from '../../assets/step-icon-next.svg';
import SignupComplete from '../../components/SignUpComplete';
import StepOneSignup from '../../components/StepOneSignup';
import StepTwoSignup from '../../components/StepTwoSignup';
import api from '../../config/api';
import '../../utils/global.css';
import './styles.css';

const steps = [
  {
    label: 'Cadastre-se',
    description: `Por favor, escreva seu nome e email.`,
  },
  {
    label: 'Escolha uma senha',
    description: 'Escolha uma senha segura.',
  },
  {
    label: 'Cadastro realizado com sucesso',
    description: `Email e senha cadastrados com sucesso!`,
  },
];

function SignUp() {
  const navigate = useNavigate()

  const [registerForm, setRegisterForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [activeStep, setActiveStep] = useState(0);

  const [errorMessage, setErrorMessage] = useState('')

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const validateFirstStep = async (name, email) => {
    setErrorMessage(() => '');

    try {
      if (!name || !email) {
        setErrorMessage(() => 'Preencha todos os campos!');
        return
      }

      if (!isEmail(email)) {
        setErrorMessage(() => 'Informe um email válido!');
        return
      }

      handleNext()
    } catch (error) {
      setErrorMessage(error.response.data.mensagem);
    }
  }

  const validateSecondStep = async (name, email, password, confirmPassword) => {
    setErrorMessage(() => '');

    try {
      if (!password || !confirmPassword) {
        setErrorMessage(() => 'Preencha todos os campos!');
        return
      }

      if (password !== confirmPassword) {
        setErrorMessage(() => 'As senhas não coincidem!');
        return
      }

      const response = await api.post('/users', { name, email, password });

      handleNext()
    } catch (error) {
      setErrorMessage(error.response.data.mensagem);
      setActiveStep(0)
    }

  };

  const redirectToLogin = () => {
    navigate('/');
  };

  const setIcon = (props) => {
    const { active, completed } = props;
    if (active) {
      return <img src={StepIconActive} />;
    } else if (completed) {
      return <img src={StepIconComplete} />;
    } else {
      return <img src={StepIconNext} />;
    }
  }

  return (
    <>
      <main>
        <div className='left'>
          <Box>
            <Stepper
              connector={<StepConnector
                sx={{
                  '& .MuiStepConnector-line ': {
                    borderColor: '#0E8750',
                    borderWidth: '3px',
                    marginLeft: '2px'
                  }
                }}
              />}
              activeStep={activeStep}
              orientation="vertical"
            >
              {steps.map((step) => (
                <Step
                  key={step.label}
                >
                  <StepLabel StepIconComponent={setIcon}>
                    <Typography
                      sx={{ fontFamily: 'Montserrat', fontWeight: 700, fontSize: 18, fontHeight: '130%', color: '#0E8750' }}
                    >
                      {step.label}
                    </Typography>
                  </StepLabel>

                  <StepContent
                    sx={{ borderLeft: '3px solid #0E8750', marginLeft: '14px' }}
                  >
                    <Typography
                      sx={{ fontFamily: 'Nunito', fontWeight: 600, fontSize: 18, fontHeight: '130%', color: '#3F3F55' }}
                    >
                      {step.description}
                    </Typography>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
          </Box>
        </div>
        <div className='right'>
          <div className='stepper-form'>
            {activeStep === 0 && <StepOneSignup registerForm={registerForm} setRegisterForm={setRegisterForm} />}
            {activeStep === 1 && <StepTwoSignup registerForm={registerForm} setRegisterForm={setRegisterForm} />}
            {activeStep === 2 && <SignupComplete registerForm={registerForm} setRegisterForm={setRegisterForm} />}

            {activeStep < 2 && <span className='error-message-span'>{errorMessage ? errorMessage : <br />}</span>}

            {activeStep === 0 && <button
              className='continue-button'
              onClick={() => validateFirstStep(registerForm.name, registerForm.email)}
            >
              Continuar
            </button>}

            {activeStep === 1 && <button
              className='continue-button'
              onClick={() => validateSecondStep(registerForm.name, registerForm.email, registerForm.password, registerForm.confirmPassword)}
            >
              Finalizar Cadastro
            </button>}

            {activeStep === 2 && <button
              className='continue-button'
              onClick={redirectToLogin}
            >
              Ir para Login
            </button>}

            {activeStep < 2 && <span>Já possui uma conta? Faça seu <a onClick={redirectToLogin}>Login</a></span>}
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp