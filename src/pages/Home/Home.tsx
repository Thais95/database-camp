import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer } from './Home.styled';
import bannerHome from '../../assets/banner-home.svg';

export const Home = () => {
  const user = localStorage.getItem('user');

  function formatarTexto(str: any) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    <Container>
      <InnerContainer>
        <Header />
        <ContentContainer>
          <div>
          <h1>Bom te ver por aqui, <span>{formatarTexto(user)}</span>!</h1>
          <h3>Aproveite seu banco de dados ao máximo, com a certeza que seus dados estão seguros conosco. Seja na cidade grande ou na floresta, conte com a gente!</h3>
          </div>
          <img className='floating' src={bannerHome} alt="" />
        </ContentContainer>
      </InnerContainer>
    </Container>
  )
}
