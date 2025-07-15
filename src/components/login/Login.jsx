import { FaUser, FaLock } from 'react-icons/fa';
import './Login.css'

const Login = () => {
 return (
  <div className='container'>
   <form>
    <h1>Login</h1>
    <h3>Que bom te ver de novo, viajante!
      <br/> Sentimos sua falta.</h3>
    <div className= 'input-field'>
    <input type='email' placeholder='E-mail'/>
    <FaUser className='icon' />
</div>
<div className='input-field'>
    <input type='password' placeholder='Senha'/>
    <FaLock  className='icon' />
    </div>

    <div className='recall-forget'>
      <label>
    <input type='checkbox'/>
    Lembre de mim 
      </label>
      <a href='#'>Esqueceu a senha?</a>
    </div>
   
   <button>Entrar</button>
  <div className='signup-link'>
    <p>Não possui registro? <a href='#'>Crie uma conta</a></p>
  </div>
   </form>
  </div>
);
}

export default Login;