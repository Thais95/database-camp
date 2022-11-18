import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { IUser } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { userSignupFormSchema } from '../../utils/schemas';
import { BannerContainer, Container, InnerContainer } from '../../components/Container.styled';
import Banner from '../../assets/banner.svg';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
        resolver: yupResolver(userSignupFormSchema)
    });
    const { userSignup } = useContext(AuthContext);

    return (
        <Container>
            <BannerContainer>
                <img src={Banner} alt="Desenho com tons de verde de um acampamento" />
            </BannerContainer>
            <InnerContainer>
                <h2>DataBase Camp</h2>

                <h1>Crie uma conta</h1>

                <form onSubmit={handleSubmit(data => userSignup(data))}>
                    <div>
                        <label htmlFor="login">Login</label>
                        <input type="text" id="login" {...register("login")} />
                        {errors.login && <span>{errors.login.message}</span>}
                    </div>

                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="text" id="senha" {...register("senha")} />
                        {errors.senha && <span>{errors.senha.message}</span>}
                    </div>

                    <div>
                        <input type="submit" value="Cadastrar" />
                    </div>
                </form>

                <div className='signup'>
                    <p>Já tem uma conta?</p>
                    <Link to="/">Entre aqui</Link>
                </div>
            </InnerContainer>
        </Container>
    )
}
