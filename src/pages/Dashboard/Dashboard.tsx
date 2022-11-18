import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, InnerContainer } from './Dashboard.styled'
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { IChildren, IPersona } from '../../utils/interfaces';
import { api } from '../../utils/api';
import { PersonasContext } from '../../context/PersonasContext';

export const Dashboard = () => {
  
  const { getPersonasList, persona } = useContext(PersonasContext);

  useEffect(() => {
    getPersonasList()
  }, [])
 
  return (
    <Container>
      <Aside />
      <InnerContainer>
      <Header/>
      <>
      {persona?.map((person) => {
        return <div>
          <p>{person.nome}</p>
          <p>{person.cpf}</p>
          <p>{person.dataNascimento}</p>
          <p>{person.email}</p>
          <br />
        </div>
       
        })}
      </>
      </InnerContainer>
    </Container>
  )
}
