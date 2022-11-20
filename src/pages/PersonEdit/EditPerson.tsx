import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { PersonasContext } from '../../context/PersonasContext';
import { IPersona } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { personaFormSchema } from '../../utils/schemas';
import { ContentContainer, PersonContent } from './EditPerson.styled';
import InputMask from 'react-input-mask';
import { useLocation, useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';

export const EditPerson = () => {
    const navigate = useNavigate();
    const { state } = useLocation();
    const { register, handleSubmit, formState: { errors } } = useForm<IPersona>({
        resolver: yupResolver(personaFormSchema)
    });
    const { editPersona } = useContext(PersonasContext);

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <h1>Editar Pessoa</h1>
                    <PersonContent>
                        <form onSubmit={handleSubmit((data: IPersona) => editPersona(data))}>
                            <div>
                                <label htmlFor="nome">Nome</label>
                                <input type="text" id="nome" {...register("nome")} defaultValue={state.nome} />
                                {errors.nome && <span>{errors.nome.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="dataNascimento">Data de nascimento</label>
                                <input type="date" id="dataNascimento" {...register("dataNascimento")} defaultValue={state.dataNascimento} />
                                {errors.dataNascimento && <span>{errors.dataNascimento.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="cpf">CPF</label>
                                <InputMask mask="999.999.999-99" type="text" id="cpf" {...register("cpf")} defaultValue={state.cpf} disabled />
                                {errors.cpf && <span>{errors.cpf.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="text" id="email" {...register("email")} defaultValue={state.email} />
                                {errors.email && <span>{errors.email.message}</span>}
                            </div>

                            <div style={{display: 'none'}}>
                                <input type="text" id="idPessoa" {...register("idPessoa")} defaultValue={state.idPessoa} />
                            </div>

                            <div>
                                <input type="submit" value="Salvar" />

                                <input type="button" value="Cancelar" onClick={() => (navigate('/people'))} />
                            </div>
                        </form>
                    </PersonContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}