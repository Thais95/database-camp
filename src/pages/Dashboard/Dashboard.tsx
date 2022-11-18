import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Container, InnerContainer } from '../../components/Container.styled';

export const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  return (
    <Container>
      <InnerContainer>
        <h1>Dashboard</h1>
        <form>
          <div>
            <input type="submit" onClick={handleLogout} value={"Sair da conta"} />
            <button><Link to='/persona/create'>Cadastrar</Link></button>
          </div>
        </form>
      </InnerContainer>
    </Container>
  )
}
