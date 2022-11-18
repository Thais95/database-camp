import { useContext } from 'react'
import { HeaderStyled, NavContainer } from './Header.styled'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import logo from '../../assets/logo.svg'

export const Header = () => {
  const { handleLogout } = useContext(AuthContext);
  const { user } = useContext(AuthContext)

  let activeStyle = {
    color: '#F04E3D',
    fontWeight: 700
  };

  return (
    <HeaderStyled>
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
            <p className='deslogar' onClick={handleLogout}>Deslogar</p>
          </div>
        </div>

        <div className='border'></div>
      </NavContainer>
    </HeaderStyled>
  )
}
