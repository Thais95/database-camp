import React, { useContext } from 'react'
import { AsideStyled } from './Aside.styled'
import {  } from 'react-icons'
import { AuthContext } from '../../context/AuthContext'
import { FaUsers, FaUserPlus, FaSearch, FaUserCircle } from 'react-icons/fa'
import logo from '../../assets/logo.svg'
import { ReactComponent as MarcaRegistrada } from '../../assets/marca-registrada.svg';
import { Link } from 'react-router-dom'



export const Aside = () => {

  const { user } = useContext(AuthContext)

  return (
    <AsideStyled>
      <div className='logo'>
        <img src={logo} alt="Logo"/>
        <h1>DBC</h1>
      </div>
      
      <hr />

      <div className='container'>

        <div className='user'>
          <FaUserCircle fill='#ffffff' size={50}/>
          <h2>{user?.login}</h2>
        </div>

        <div className='content'>
          <div>
            <FaUsers fill='#ffffff' size={30}/>
            <Link to='/dashboard'>Lista de Pessoas</Link>
          </div>

          <div>
            <FaUserPlus fill='#ffffff' size={30}/>
            <Link to='/persona/create'>Adicionar Pessoa</Link>
          </div>

          <div>
            <FaSearch fill='#ffffff' size={30}/>
            <p>Procurar Pessoa</p>
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
