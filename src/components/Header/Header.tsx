import { useContext } from 'react'
import { NavContainer } from './Header.styled'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.svg'

export const Header = () => {
  const { handleLogout } = useContext(AuthContext);
  const user = localStorage.getItem('user');

  let activeStyle = {
    color: '#f77a6c',
    fontWeight: 700
  };

  return (
    <NavContainer>
      <div className='linkContainer'>
        <div>
          <div className='logo'>
            <Link to='/dashboard' className='logoLink'>
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
                <NavLink to="/dashboard"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Pessoa</NavLink>
              </li>
              <li>
                <NavLink to="/address"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Endereço</NavLink>
              </li>
              <li>
                <NavLink to="/contact"
                  style={({ isActive }) =>
                    isActive ? activeStyle : undefined
                  }>Contato</NavLink>
              </li>
            </ul>
          </nav>
        </div>

        <div>
          <p className='user'>{user}</p>
          <p className='deslogar' onClick={handleLogout}>Deslogar</p>
        </div>
      </div>
    </NavContainer>
  )
}
