import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { PersonasContext } from '../../context/PersonasContext';
import { IPersona } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { personaFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from './EditPerson.styled';
import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';

export const EditPerson = () => {

    const { state } = useLocation();


    const { register, handleSubmit, formState: { errors } } = useForm<IPersona>({
        resolver: yupResolver(personaFormSchema)
    });
    const { editPersona } = useContext(PersonasContext);

    return (
        <Container>
            <InnerContainer>
                <h1>Editar Pessoa</h1>
                <form onSubmit={handleSubmit((data: IPersona) => editPersona(data))}>
                    <div>
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" {...register("nome")} defaultValue={state.nome}/>
                        {errors.nome && <p>{errors.nome.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="dataNascimento">Data de Nasc:</label>
                        <input type="date" id="dataNascimento" {...register("dataNascimento")} defaultValue={state.dataNascimento}/>
                        {errors.dataNascimento && <p>{errors.dataNascimento.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="cpf">CPF:</label>                        
                        <InputMask mask="999.999.999-99" type="text" id="cpf" {...register("cpf")} defaultValue={state.cpf}/>
                        {errors.cpf && <p>{errors.cpf.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="email">Email:</label>
                        <input type="text" id="email" {...register("email")} defaultValue={state.email}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="idPessoa">ID:</label>
                        <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                        {errors.email && <p>{errors.email.message}</p>}
                    </div>

                    <input type="submit" value="Cadastrar" />
                    </form>
            </InnerContainer>
        </Container>
    )
}