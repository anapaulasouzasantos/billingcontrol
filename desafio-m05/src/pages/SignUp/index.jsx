import './styles.css';
import '../../utils/global.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Cadastre-se',
    description: `Por favor, escreva seu nome e email.`,
  },
  {
    label: 'Escolha uma senha',
    description:
      'Escolha uma senha segura.',
  },
  {
    label: 'Cadastro realizado com sucesso',
    description: `Email e senha cadastrados com sucesso!`,
  },
];

function SignUp() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <>
      <main>
        <div className='left'>
          <Box>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel>
                    {step.label}
                  </StepLabel>
                  <StepContent>
                    <Typography>{step.description}</Typography>

                  </StepContent>
                </Step>
              ))}
            </Stepper>

          </Box>
        </div>
        <div className='right'>
          {/* {steps.map((step, index) => (
            <Box sx={{ mb: 2 }}>
              <div>
                <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 1, mr: 1 }}
                >
                  {index === steps.length - 1 ? 'Finish' : 'Continue'}
                </Button>
                <Button
                  disabled={index === 0}
                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>
            </Box>
          ))} */}
          <div className='stepper-form'>
            <h1>Adicione seus dados</h1>
            <label>
              Nome*
              <input type="text" placeholder='Digite seu nome' />
            </label>
            <label>
              Email*
              <input type="email" placeholder='Digite seu e-mail' />
            </label>

            <button onClick={handleNext}>Continuar</button>
            <span>Já possui uma conta? Faça seu <a>Login</a></span>
          </div>
        </div>
      </main>
    </>
  );
}

export default SignUp