import { Container, ContentContainer, InnerContainer } from '../../components/DashboardContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { HomeCard, HomeContent } from './Home.styled';

export const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <h1>Página inicial</h1>
          <HomeContent>
            <HomeCard />
          </HomeContent>
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
