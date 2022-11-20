import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, AddressCard, AddressContent } from './Address.styled';
import { AddressContext } from '../../context/AddressContext';
import { IAddress } from '../../utils/interfaces';
import { FaEdit, FaMapMarkerAlt, FaTrashAlt } from 'react-icons/fa';

export const Address = () => {
  const { getAddressList, address, deleteAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAddressList('1');
    console.log(getAddressList('1'));
  }, [])

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Endereços cadastrados</h1>
          <AddressContent>
            {Array.from(address).map((endereco: IAddress) => {
              return (
                <AddressCard key={endereco.idEndereco}>
                  <div className='card-content'>
                    <FaMapMarkerAlt size={30} fill='#1D8E9E' />

                    <div>
                      <p><span>Endereço de:</span> {endereco?.idPessoa}</p>
                      <p><span>CEP:</span> {endereco?.cep}</p>
                    </div>

                    <div>
                      <p><span>Tipo:</span> {endereco?.tipo.toLowerCase()}</p>
                      <p><span>CEP:</span> {endereco?.cep}</p>
                    </div>

                    <div>
                      <p><span>País:</span> {endereco?.pais}</p>
                      <p><span>Estado:</span> {endereco?.estado}</p>
                    </div>

                    <div>
                      <p><span>Cidade:</span> {endereco?.cidade}</p>
                      <p><span>Logradouro:</span> {endereco?.logradouro}</p>
                    </div>

                    <div>
                      <p><span>Numero:</span> {endereco?.numero}</p>
                      {endereco ? <p><span>Complemento:</span> {endereco?.complemento}</p> : ''}
                    </div>

                  </div>
                  <div className='card-buttons'>
                    <button title='Editar' onClick={() => { navigate('/address/edit', { state: endereco }) }}><FaEdit size={16} /></button>
                    <button title='Remover' onClick={() => { deleteAddress(endereco.idEndereco) }}><FaTrashAlt size={16} /></button>
                  </div>
                </AddressCard>
              )
            })}
          </AddressContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
