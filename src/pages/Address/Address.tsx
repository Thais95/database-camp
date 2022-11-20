import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, AddressCard, AddressContent } from './Address.styled';
import { AddressContext } from '../../context/AddressContext';
import { IAddress } from '../../utils/interfaces';
import { FaEdit, FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';
import { AddressPagination } from '../../components/Pagination/AddressPagination/AddressPagination';
import { ConfirmationModal } from '../../components/ModalAddress/Modal';

export const Address = () => {
  const { getAddressList, address, deleteAddress } = useContext(AddressContext);
  const [modal, setModal] = useState<boolean>(false);
  const [id, setId] = useState<number | null>(null);
  const [cep, setCep] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    getAddressList('1');
  }, [])

  function handleDeleteUser(idEndereco: number, cep: string) {
    setModal(true);
    setId(idEndereco);
    setCep(cep);
  }

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Endereços cadastrados</h1>
          <AddressContent>
            <ConfirmationModal show={modal} idEndereco={id} setModal={setModal} cep={cep} />
            {Array.from(address).map((endereco: IAddress) => {
              return (
                <AddressCard key={endereco.idEndereco}>
                  <div className='card-content'>
                    <i><FaMapMarkerAlt size={30} fill='#1D8E9E' /></i>

                    <div>
                      <p><span>CEP:</span> {endereco?.cep}</p>
                      <p><span>Tipo:</span> {endereco?.tipo.toLowerCase()}</p>
                    </div>

                    <div className='addressSmall'>
                      <p><span>País:</span> {endereco?.pais}</p>
                      <p><span>Estado:</span> {endereco?.estado}</p>
                    </div>

                    <div className='addressBig'>                      
                      <p><span>Cidade:</span> {endereco?.cidade}</p>
                      <p><span>Logradouro:</span> {endereco?.logradouro}</p>
                    </div>

                    <div>                      
                      <p><span>Numero:</span> {endereco?.numero}</p>
                      {endereco ? <p><span>Complemento:</span> {endereco?.complemento}</p> : ''}
                    </div>

                  </div>
                  <div className='card-buttons'>
                    <button title='Editar endereço' onClick={() => { navigate('/address/edit', { state: endereco }) }}><FaEdit size={18} /></button>
                    
                    <button title='Remover endereço' onClick={() => { handleDeleteUser(endereco.idEndereco, endereco.cep) }}><FaTrashAlt size={18} /></button>
                  </div>
                </AddressCard>
              )
            })}
          </AddressContent>
        </ContentContainer>
      </InnerContainer>
      <AddressPagination />
    </Container>
  )
}
