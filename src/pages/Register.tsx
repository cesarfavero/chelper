import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


import loginImage from '../assets/images/deaf-image.png'; 
import googleIconImg from '../assets/images/google-icon.svg';
import logoFlatImg from '../assets/images/logo-flat.png'
import logoDarkImg from '../assets/images/logo-dark.png'
import '../styles/register.scss';


import { Button } from '../components/Button';
import { useAuth } from '../hooks/useAuth';

  export function Register() {
    const history = useHistory();
    const { user, signInWithGoogle } = useAuth()

  async function HandleLogin() {
    if (!user) {
      await signInWithGoogle()
      }

        history.push('/login');
    }

    function NavigateToLoginPage () {
      history.push('/login');
    }
  


  return (
    
    <div id="page-auth">
      <aside>
        <img src={loginImage} alt="Ilustração de simbolizando controle"/>
        <strong>Os melhores cursos</strong>
        <p>Adaptado exclusivamente para você!</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoFlatImg} className="logo" alt="Logo C-Helper"/>
          <button onClick={HandleLogin} className="sign-google">
            <img src={googleIconImg} alt="Ícone Google"/>          
            Crie sua conta com o Google
          </button>
          <div className="separator">ou utilize e-mail e senha</div>
          <form>
            <input 
            type="text"
            placeholder="Nome Completo"
            />
            <input
            type="email"
            placeholder="Insira seu e-mail"
            />
            <input
            type="password"
            placeholder="Confirme sua senha"
            className="pass-input"
            />
            
            <Button onClick={NavigateToLoginPage} type="submit" className="btn-create">
              Criar uma conta
            </Button>
            <p>
              Já tem uma conta? <Link to="/login">Faça o Login</Link>
            </p>
          </form>
        </div>
      </main>

    </div>
  )
}