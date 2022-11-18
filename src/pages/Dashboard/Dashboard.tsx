import { useContext, useEffect   } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from './Dashboard.styled'
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { PersonasContext } from '../../context/PersonasContext';

export const Dashboard = () => {
  
  const { getPersonasList, persona } = useContext(PersonasContext);
  useEffect(() => {
    getPersonasList()
  }, [])
 
  const navigate = useNavigate();

  return (
    <Container>
      <Aside />
      <InnerContainer>
      <Header/>
      <>
      {persona?.map((person) => {
        return <div key={person.idPessoa}>
          <p>{person.nome}</p>
          <p>{person.cpf}</p>
          <p>{person.dataNascimento}</p>
          <p>{person.email}</p>
          <br />

          <button onClick={() => {navigate('/persona/edit', {state: person})}}>editar</button>
          <button>remover</button>
        </div>
       
        })}
      </>
      </InnerContainer>
    </Container>
  )
}
