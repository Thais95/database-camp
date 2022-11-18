import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../context/AuthContext';
import { IUser } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { userFormSchema } from '../../utils/schemas';
import { BannerContainer, Container, InnerContainer } from '../../components/Container.styled';
import Banner from '../assets/banner.svg';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IUser>({
        resolver: yupResolver(userFormSchema)
    });
    const { userSignup } = useContext(AuthContext);

    return (
        <Container>
            <BannerContainer>
                <img src={Banner} alt="Desenho com tons de verde de um acampamento" />
            </BannerContainer>
            <InnerContainer>
                <h1>Cadastrar-se</h1>

                <form onSubmit={handleSubmit(data => userSignup(data))}>
                    <div>
                        <label htmlFor="login">Usuário</label>
                        <input type="text" id="login" {...register("login")} />
                        {errors.login && <p>{errors.login.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="senha">Senha</label>
                        <input type="text" id="senha" {...register("senha")} />
                        {errors.senha && <p>{errors.senha.message}</p>}
                    </div>

                    <div>
                        <input type="submit" value="Criar conta" />
                    </div>
                </form>

                <div className='signup'>
                    <p>Já tem uma conta?</p>
                    <Link to="/">Voltar ao login</Link>
                </div>
            </InnerContainer>
        </Container>
    )
}
