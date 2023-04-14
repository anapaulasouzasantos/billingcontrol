import './styles.css';
import Background from '../../assets/backgroudImage.svg';
import { useState } from 'react';


function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      return;
    }
  }

  return (
    <main>
      <div className='left'>
        <img src={Background} />
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
