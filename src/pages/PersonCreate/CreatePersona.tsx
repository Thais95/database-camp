import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { PersonasContext } from '../../context/PersonasContext';
import { IPersona } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { personaFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContentContainer, PersonContent } from './CreatePerson.styled';
import InputMask from 'react-input-mask';

export const AddPersona = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IPersona>({
        resolver: yupResolver(personaFormSchema)
    });
    const { createPersona } = useContext(PersonasContext);

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <h1>Criar Pessoa</h1>
                    <PersonContent>
                    <form onSubmit={handleSubmit((data: IPersona) => createPersona(data))}>
                        <div>
                            <label htmlFor="nome">Nome</label>
                            <input type="text" id="nome" {...register("nome")} />
                            {errors.nome && <span>{errors.nome.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="dataNascimento">Data de nascimento</label>
                            <input type="date" id="dataNascimento" {...register("dataNascimento")} />
                            {errors.dataNascimento && <span>{errors.dataNascimento.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="cpf">CPF</label>
                            <InputMask mask="999.999.999-99" type="text" id="cpf" {...register("cpf")} />
                            {errors.cpf && <span>{errors.cpf.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="text" id="email" {...register("email")} />
                            {errors.email && <span>{errors.email.message}</span>}
                        </div>

                        <div>
                            <input type="submit" value="Cadastrar" />
                        </div>
                    </form>
                    </PersonContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}