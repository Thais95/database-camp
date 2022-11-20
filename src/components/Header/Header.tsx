import { useContext } from 'react'
import { NavContainer } from './Header.styled'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import { FaUserCircle } from 'react-icons/fa';
import logo from '../../assets/logo.svg';

export const Header = () => {
  const { handleLogout } = useContext(AuthContext);
  const user = localStorage.getItem('user');

  function formatarTexto(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  let activeStyle = {
    color: '#f77a6c'
  };

  return (
    <NavContainer>
      <div className='linkContainer'>
        <div>
          <div className='logo'>
            <Link to='/home' className='logoLink'>
              <img src={logo} alt="Logo" />
              <p>DBC</p>
            </Link>
          </div>

          <nav>
            <ul>
              <li>
                <NavLink to="/home"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Início</NavLink>
              </li>
              <li>
                <NavLink to="/people"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Pessoas</NavLink>
              </li>
              <li>
                <NavLink to="/address"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Endereços</NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Contatos</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <span className='user'>
            <FaUserCircle size={22} fill='var(--background-color)'/>
            <p>{formatarTexto(user)}</p>
          </span>
          <p className='deslogar' onClick={handleLogout}>Sair da conta</p>
        </div>
      </div>
    </NavContainer>
  )
}
