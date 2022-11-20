import { useContext, useEffect, useState  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled'
import { ContentContainer, DashboardContent, PersonCard } from './Dashboard.styled';
import { Header } from '../../components/Header/Header';
import { IPersona } from '../../utils/interfaces';
import { PersonasContext } from '../../context/PersonasContext';
import { ConfirmationModal } from '../../components/ModalPersona/Modal';
import { PersonaPagination } from '../../components/Pagination/PersonaPagination/PersonaPagination';
import { FaUserAlt, FaEdit, FaTrashAlt, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const Dashboard = () => {
  const { getPersonasList, persona } = useContext(PersonasContext);
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [personName, setPersonName] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    getPersonasList('1')
  }, [])

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
          <h1>Pessoas cadastradas</h1>
          <div className='add-btn'>
            <Link to={'/person/create'}><button>Adicionar Pessoa</button></Link>
          </div>
          <DashboardContent>
            <ConfirmationModal show={modal} idPessoa={id} setModal={setModal} nome={personName} />
            {Array.from(persona).map((person: IPersona) => {
              return (
                <PersonCard key={person.idPessoa}>

                  <div className='card-content'>
                    <FaUserAlt size={30} fill='#1D8E9E'/>

                    <div>
                      <p><span>Nome:</span> {person.nome}</p>
                      <p><span>Email:</span> {person.email.toLowerCase()}</p>
                    </div>
                    
                    <div className='smallBox'>
                      <p><span>CPF:</span> {person.cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')}</p>
                      <p><span>Data de Nasc.:</span> {person.dataNascimento.replace(/(\d{4})-(\d{2})-(\d{2})/, '$3/$2/$1')}</p>
                    </div>
                  </div>

                  <div className='card-buttons'>

                    <button title='Adicionar endereço'><FaMapMarkerAlt size={18}/></button>

                    <button title='Adicionar contato' onClick={() => { navigate ('/contact/create', {state: person})}}><FaPhoneAlt size={18}/></button>

                    <button title='Editar pessoa' onClick={() => { navigate('/person/edit', {state: person}) }}><FaEdit size={18}/></button>

                    <button title='Remover pessoa' onClick={() => { handleDeleteUser(person.idPessoa, person.nome) }}><FaTrashAlt size={18}/></button>
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
