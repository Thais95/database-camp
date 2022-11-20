import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, AddressCard, AddressContent } from './Address.styled';
import { AddressContext } from '../../context/AddressContext';
import { IAddress } from '../../utils/interfaces';
import { FaEdit, FaUserAlt, FaTrashAlt } from 'react-icons/fa';

export const Address = () => {
  const { getAddressList, address, deleteAddress } = useContext(AddressContext);
  const navigate = useNavigate();

  useEffect(() => {
    getAddressList('1');
    console.log('chegou aqui');
  }, [])

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de endereços cadastrados</h1>
          <AddressContent>
            {Array.from(address).map((endereco: IAddress) => {
              return (
                <AddressCard key={endereco.idEndereco}>
                  <div className='card-content'>
                    <FaUserAlt size={30} fill='#1D8E9E' />

                    <div>
                      <p>Endereço de: {endereco.idPessoa}</p>
                      <p>CEP: {endereco.cep}</p>
                    </div>

                    <div>
                      <p>Tipo: {endereco.tipo}</p>
                      <p>CEP: {endereco.cep}</p>
                    </div>

                    <div>
                      <p>País: {endereco.pais}</p>
                      <p>Estado: {endereco.estado}</p>
                    </div>

                    <div>
                      <p>Cidade: {endereco.cidade}</p>
                      <p>Logradouro: {endereco.logradouro}</p>
                    </div>

                    <div>
                      <p>Numero: {endereco.numero}</p>
                      {endereco ? <p>Complemento: {endereco?.complemento}</p> : ''}
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
