import { useContext } from 'react'
import { HeaderStyled } from './Header.styled'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';

export const Header = () => {
  const { handleLogout } = useContext(AuthContext);

  let activeStyle = {
    color: '#F04E3D',
    fontWeight: 700
  };

  return (
    <HeaderStyled>
      <nav>
        <ul>
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

        <div>
          <p onClick={handleLogout}>Deslogar</p>
        </div>
      </nav>
      <div className='border'></div>
    </HeaderStyled>
  )
}
