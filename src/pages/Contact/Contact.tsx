import { Container, ContentContainer, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContactCard, ContactContent } from './Contact.styled';

export const Contact = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Lista de contatos cadastrados</h1>
          <ContactContent>
            <ContactCard />
          </ContactContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
