import { Container, ContentContainer, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { AddressCard, AddressContent } from './Address.styled';

export const Address = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de endereços cadastrados</h1>
          <AddressContent>
            <AddressCard />
          </AddressContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
