import { Container, ContentContainer, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Aside } from '../../components/Aside/Aside';
import { Header } from '../../components/Header/Header';

export const Contact = () => {
  return (
    <Container>
      <Aside />
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Contato</h1>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
