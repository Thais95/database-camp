import { useContext, useEffect, useState } from 'react';
import { Container, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, ContactCard, ContactContent } from './Contact.styled';
import { ContactContext } from '../../context/ContactContext';
import { IContacts } from '../../utils/interfaces';
import { FaEdit, FaUserAlt, FaTrashAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { ConfirmationModal } from '../../components/ModalContact/Modal';

export const Contact = () => {
  const { getContactList, contacts, deleteContact } = useContext(ContactContext);
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [tel, setTel] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getContactList()
  }, [])

  function handleDeleteContact(idContato: number, telefone: string) {
    setModal(true);
    setId(idContato);
    setTel(telefone);
  }

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de contatos cadastrados</h1>
          <ContactContent>
            <ConfirmationModal show={modal} idContato={id} setModal={setModal} telefone={tel} />
            {Array.from(contacts).map((contact: IContacts) => {
              return (
              <ContactCard key={contact.idContato}>
                <div className='card-content'>
                  <FaUserAlt size={30} fill='#1D8E9E' />

                  <div>
                    <p><span>Tel:</span> {contact?.telefone}</p>
                    <p><span>Tipo:</span> {contact?.tipoContato.toLowerCase()}</p>
                  </div>

                  <div>
                    <p><span>Contato de:</span> {contact.idPessoa}</p>
                    <p><span>Descrição:</span> {contact?.descricao}</p>
                  </div>

                </div>
                <div className='card-buttons'>
                  <button title='Editar' onClick={() => { navigate('/contact/edit', { state: contact }) }}><FaEdit size={16} /></button>
                  <button title='Remover' onClick={() => { handleDeleteContact(contact.idContato, contact.telefone) }}><FaTrashAlt size={16} /></button>
                </div>
              </ContactCard>
              )
            })}
          </ContactContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
