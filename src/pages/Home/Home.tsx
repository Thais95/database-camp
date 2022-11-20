import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer } from './Home.styled';
import bannerHome from '../../assets/banner-home.svg';

export const Home = () => {
  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <div>
          <h1>Bem vindo, Página inicial</h1>
          <h3></h3>
          </div>
          <img src={bannerHome} alt="" />
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
