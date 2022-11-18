import { useContext } from 'react'
import { AsideStyled } from './Aside.styled'
import {  } from 'react-icons'
import { AuthContext } from '../../context/AuthContext'
import { FaUsers, FaUserPlus, FaSearch, FaUserCircle } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca-registrada.svg';
import { Link } from 'react-router-dom'

export const Aside = () => {
 const user = localStorage.getItem('user')

  return (
    <AsideStyled>
      <div className='logo'>
        <Link to='/dashboard' className='logoLink'>
          <img src={logo} alt="Logo"/>
          <h1>DBC</h1>
        </Link>
      </div>
      
      <hr />

      <div className='container'>
        <div className='user'>
          <i><FaUserCircle fill='#ffffff' size={50}/></i>
          user:
          <p>{user}</p>
        </div>

        <div className='content'>
          <div>
            <Link to='/dashboard'>
              <FaUsers fill='#ffffff' size={25}/>
              Lista de Pessoas
            </Link>
          </div>

          <div>
            <Link to='/persona/create'>
            <FaUserPlus fill='#ffffff' size={25}/>
            Adicionar Pessoa
            </Link>
          </div>
        </div>
      </div>

      <footer>
        <MarcaRegistrada />
        DataBase Camp, 2022
      </footer>
    </AsideStyled>
  )
}
