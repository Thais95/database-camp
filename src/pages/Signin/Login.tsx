import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { IUser } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from '../../utils/schemas';
import { BannerContainer, Container, InnerContainer } from '../../components/Container.styled';
import Banner from '../../assets/banner.svg';

export const Login = () => {
  const { handleLogin } = useContext(AuthContext);
  const token = localStorage.getItem('token');

  const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
    resolver: yupResolver(userFormSchema)
  });

  if (token) {
    return <Navigate to='/dashboard' />
  }

  return (
    <Container>
      <BannerContainer>
        <img src={Banner} alt="Desenho com tons de verde de um acampamento" />
      </BannerContainer>
      <InnerContainer>
        <h2>DataBase Camp</h2>

        <h1>Entre na sua conta</h1>

        <form onSubmit={handleSubmit(data => handleLogin(data))}>
          <div>
            <label htmlFor="login">Login</label>
            <input type="text" id="login" {...register("login")} />
            {errors.login && <span>{errors.login.message}</span>}
          </div>

          <div>
            <label htmlFor="senha">Senha</label>
            <input type="password" id="senha" {...register("senha")} />
            {errors.senha && <span>{errors.senha.message}</span>}
          </div>

          <div>
            <input type="submit" value="Entrar" />
          </div>
        </form>

        <div className='signup'>
          <p>Novo por aqui?</p>
          <Link to="/signup">Cadastre-se</Link>
        </div>
      </InnerContainer>
    </Container>
  )
}
