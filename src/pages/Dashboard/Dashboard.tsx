import { useContext, useEffect, useState  } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/DashboardContainer/Container.styled'
import { ContentContainer, DashboardContent, PersonCard } from './Dashboard.styled';
import { Header } from '../../components/Header/Header';
import { IPersona } from '../../utils/interfaces';
import { PersonasContext } from '../../context/PersonasContext';
import { ConfirmationModal } from '../../components/Modal/Modal';
import { PersonaPagination } from '../../components/Pagination/PersonaPagination';
import { FaUserAlt, FaEdit, FaTrashAlt } from 'react-icons/fa';

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

                  <div className='card-content'>
                    <FaUserAlt size={30} fill='#1D8E9E'/>

                    <div>
                      <p><span>Nome:</span> {person.nome}</p>
                      <p><span>Email:</span> {person.email}</p>
                    </div>
                    
                    <div>
                      <p><span>CPF:</span> {person.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</p>
                      <p><span>Data de Nasc.:</span> {person.dataNascimento.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')}</p>
                    </div>
                  </div>

                  <div className='card-buttons'>
                    <button title='Editar' onClick={() => { navigate('/persona/edit', {state: person}) }}><FaEdit size={16}/></button>
                    <button title='Remover' onClick={() => { handleDeleteUser(person.idPessoa, person.nome) }}><FaTrashAlt size={16}/></button>
                  </div>
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
