import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { IUser } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from '../../utils/schemas';
import { BannerContainer, Container, InnerContainer } from '../../components/LoginContainer/Container.styled';
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
        <h1>LOGIN</h1>

        <form onSubmit={handleSubmit(data => handleLogin(data))}>
          <div>
            <label htmlFor="login">Usuário</label>
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
          <p>Não tem uma conta?</p>
          <Link to="/signup">Cadastre-se agora</Link>
        </div>
      </InnerContainer>
    </Container>
  )
}
