import { useContext, useEffect } from 'react';
import { Container, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, ContactCard, ContactContent } from './Contact.styled';
import { ContactContext } from '../../context/ContactContext';
import { IContacts } from '../../utils/interfaces';
import { FaEdit, FaUserAlt, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const Contact = () => {

  const navigate = useNavigate();

  const { getContactList, contacts, deleteContact } = useContext(ContactContext);

  useEffect(() =>{
    getContactList()
  }, [])
  
  
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de contatos cadastrados</h1>
          <ContactContent>

            {contacts?.map((contact: IContacts) => {
              return <ContactCard key={contact.idContato}>
           
                  <div className='card-content'>
                    <FaUserAlt size={30} fill='#1D8E9E'/>

                    <div>
                      <p> {contact?.telefone}</p>
                      <p>Tipo: {contact?.tipoContato}</p>
                     
                    </div>
                 
                    <div>
                      <p>ID da Pessoa: {contact.idPessoa}</p>
                      <p>ID do Contato: {contact?.idContato}</p>
                    </div>

                    <div>
                      <p>Descrição: {contact?.descricao}</p>
                    </div>

                  </div>

                  <div className='card-buttons'>
                    <button onClick={() => { navigate('/contact/edit', {state: contact}) }}><FaEdit size={16}/></button>
                    <button onClick={() => { deleteContact(contact.idContato) }}><FaTrashAlt size={16}/></button>
                  </div>
                
              </ContactCard>
            })}
          </ContactContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
