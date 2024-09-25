import { useEffect } from 'react';  
import { HeaderContent, Nav } from './style';
import logoCompleto from '../../assets/voto_completo.png';
import logo from '../../assets/voto1.png';
import { animateText } from './rolling'; // Importe a função de animação




const HeaderAndNav = () => {
  useEffect(() => {
    animateText(); // Chama a função de animação
     // Configura o menu hamburguer
  }, []);

  return (
    <>
      <HeaderContent>
        <div className="text-container" id="text-container">
          <div className="rolling-text" id="rolling-text-1">
            <img src={logoCompleto} alt="" />
          </div>
          <div className="rolling-text" id="rolling-text-2">
            <p>Registre Sua Denuncia</p>
          </div>
          <div className="rolling-text" id="rolling-text-3">
            <p>Total Privacidade</p>
          </div>
        </div>
      </HeaderContent>

      <Nav className="nav">
        <div className='logoVotoValido'>
          <img src={logo} alt="" />
        </div>
        <button className="hamburguer"></button>
        <ul className="nav-list">
          <li><a href="/" className="nav-link">Inicio</a></li>
          <li><a href="*" className="nav-link">Cadastro</a></li>
          <li><a href="*" className="nav-link">Forum</a></li>
          <li><a href="*" className="nav-link">Sobre</a></li>
        </ul>
        <div className="box-nav-contact">
          <a href="" className="nav-contact">Contato</a>
        </div>
      </Nav>
    </>
  );
};

export default HeaderAndNav; 