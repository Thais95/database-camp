import { useContext, useEffect, useState } from 'react';
import { Container, InnerContainer } from './Dashboard.styled'
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';
import { IPersona } from '../../utils/interfaces';
import { PersonasContext } from '../../context/PersonasContext';
import { ConfirmationModal } from '../../components/Modal/Modal';

export const Dashboard = () => {
  const { getPersonasList, persona } = useContext(PersonasContext);
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  useEffect(() => {
    getPersonasList()
    console.log(persona)
  }, [])

  function handleDeleteUser(idPessoa: number, nome: string) {
    setModal(true);
    setId(idPessoa);
    setPersonName(nome);
  }

  return (
    <Container>
      <Aside />
      <InnerContainer>
        <Header />
        <ConfirmationModal show={modal} idPessoa={id} setModal={setModal} nome={personName} />
        {Array.from(persona).map((person: IPersona) => {
          return (
            <div key={person.idPessoa}>
              <p>{person.nome}</p>
              <p>{person.cpf}</p>
              <p>{person.dataNascimento}</p>
              <p>{person.email}</p>
              <button onClick={() => { handleDeleteUser(person.idPessoa, person.nome) }} >Remover</button>
            </div>
          )
        })}
      </InnerContainer>
    </Container>
  )
}
