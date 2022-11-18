import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/DashboardContainer/Container.styled'
import { ContentContainer, DashboardContent, PersonCard } from './Dashboard.styled';
import { Header } from '../../components/Header/Header';
import { IPersona } from '../../utils/interfaces';
import { PersonasContext } from '../../context/PersonasContext';
import { ConfirmationModal } from '../../components/Modal/Modal';
import { PersonaPagination } from '../../components/PersonaPagination';

export const Dashboard = () => {
  const { getPersonasList, persona } = useContext(PersonasContext);
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    getPersonasList('1')
  }, [])

  const navigate = useNavigate();

  function handleDeleteUser(idPessoa: number, nome: string) {
    setModal(true);
    setId(idPessoa);
    setPersonName(nome);
  }

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de pessoas cadastradas</h1>
          <DashboardContent>
            <ConfirmationModal show={modal} idPessoa={id} setModal={setModal} nome={personName} />
            {Array.from(persona).map((person: IPersona) => {
              return (
                <PersonCard key={person.idPessoa}>
                  <p>{person.nome}</p>
                  <p>{person.cpf}</p>
                  <p>{person.dataNascimento}</p>
                  <p>{person.email}</p>
                  <button onClick={() => { handleDeleteUser(person.idPessoa, person.nome) }} >Remover</button>
                  <button onClick={() => { navigate('/persona/edit', {state: person}) }}>Editar</button>
                </PersonCard>
              )
            })}
          </DashboardContent>
        </ContentContainer>
      </InnerContainer>
      <PersonaPagination />
    </Container>
  )
}
