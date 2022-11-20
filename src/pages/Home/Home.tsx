import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Página inicial</h1>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
