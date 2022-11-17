import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { Container, LoginContainer } from './LoginContainer.styled';

export const Dashboard = () => {
  const { handleLogout } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  return (
    <Container>
      <LoginContainer>
        <h1>Dashboard</h1>
        <form>
          <div>
            <input type="submit" onClick={handleLogout} value={"Sair da conta"} />
            <button><Link to='/persona/create'>Cadastrar</Link></button>
          </div>
        </form>
      </LoginContainer>
    </Container>
  )
}
