import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css';
import { GrGoogle } from 'react-icons/gr';

const Login = () => {
  return (
    <div className='container Login'>
      <form>
        <h1>Login</h1> <br />
        <h3>Que bom te ver de novo, viajante!
          <br /> Sentimos sua falta.</h3> <br />
        <div className='input-field'>
          <input type='email' placeholder='E-mail' />
          <FaUser className='icon' />
        </div>
        <div className='input-field'>
          <input type='password' placeholder='Senha' />
          <FaLock className='icon' />
        </div>

        <div className='recall-forget'>
          <label>
            <input type='checkbox' />
            Lembre de mim
          </label>
          <a href='#'>Esqueceu a senha?</a>
        </div> <br />

        <button>Entrar</button>
        <div className='signup-link'>
          <p>Não possui registro? <a href='#'>Crie uma conta</a></p>
        </div> <br />

        <div className='text-continue'>
          <p>Ou continue com</p>
        </div>
        <div className='list'>
          <ul>
            <li><img src="/google.png" alt="google" />
            </li>
            <li><img src="/apple.png" />
            </li>
            <li> <img src="/facebook.png" />
            </li>
          </ul>
        </div>

      </form>
    </div>
  );
}

export default Login;