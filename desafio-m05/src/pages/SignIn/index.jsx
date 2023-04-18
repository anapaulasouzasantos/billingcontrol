import './styles.css';
import '../../utils/global.css';
import Background from '../../assets/background-image.svg';
import { useState } from 'react';

function SignIn() {
  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      setErrorMessage('Todos os campos são obrigatorios.')
      return;
    }
  }

  return (
    <main>
      <div className='left'>
        <img src={Background} alt='aside background image' className='bg-image' />
      </div>
      <div className='right'>
        <form onSubmit={handleSubmit} >
          <h1>Faça seu login!</h1>
          <div className='container-input' >
            <label>
              E-mail
              <input
                type='text'
                placeholder='Digite seu e-mail'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              >
              </input>
            </label>
            <label>
              Senha
              <input
                type='password'
                placeholder='Digite sua senha'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              >
              </input>
            </label>
          </div>
          {errorMessage && <span className='error-message' >{errorMessage}</span>}
          <div className='container-enter' >
            <button className='btn-enter' >Entrar</button>
            <span>Ainda não possui uma conta? Cadastre-se</span>
          </div>
        </form>

      </div>
    </main>
  )
}

export default SignIn;