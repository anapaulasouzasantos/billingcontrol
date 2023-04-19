import './styles.css';
import '../../utils/global.css';
import api from '../../config/api';
import { getItem, setItem } from '../../functions/storage';
import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function SignIn() {
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      if (!email || !password) {
        setErrorMessage('Todos os campos são obrigatorios.')
        return;
      }

      const response = await api.post('/login', {
        email,
        password
      });

      const { token, user } = response.data;

      setItem('token', token);
      setItem('email', user.email);
      setItem('name', user.name)
      navigate('/main');
    } catch (error) {
      setEmail('');
      setPassword('');
      setErrorMessage(error.response.data.mensagem);
    }
  }

  useEffect(() => {
    const token = getItem('token');

    if (token) {
      navigate('/main');
    }
  }, [])

  return (
    <main className='container-page-login'>
      <div className='left-content'>
        <p className='subtitle' >Gerencie todos os pagamentos da sua empresa em um só lugar.</p>
      </div>
      <div className='right-content'>
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
              Senha < span className='pass-recover' >Esqueceu a senha?</span>
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
            <button className='btn-enter' style={{cursor: 'pointer'}} >Entrar</button>
            <span>Ainda não possui uma conta? <Link to='/signup'>Cadastre-se</Link></span>
          </div>
        </form>
      </div>
    </main>
  )
}

export default SignIn;