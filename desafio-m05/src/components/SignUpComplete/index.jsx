import { useState } from "react";
import SignUpCompleteImage from '../../assets/signup-complete.svg';
import './styles.css'

function SignUpComplete() {
  return (
    <>
      <div>
        <div className='success-box'>
          <img src={SignUpCompleteImage} alt='Check Symbol' />
          <h1>Cadastro realizado com sucesso!</h1>
        </div>
      </div>
    </>
  )
}

export default SignUpComplete