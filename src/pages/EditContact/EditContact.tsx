import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { PersonasContext } from '../../context/PersonasContext';
import { IContacts } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema, personaFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from './EditContact.styled';
import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { ContactContext } from '../../context/ContactContext';

export const EditContact = () => {

    const { state } = useLocation();


    const { register, handleSubmit, formState: { errors } } = useForm<IContacts>({
        resolver: yupResolver(contactFormSchema)
    });
    const { editContact } = useContext(ContactContext);

    return (
        <Container>
            <InnerContainer>
                <h1>Editar Contato</h1>
                <form onSubmit={handleSubmit((data: IContacts) => editContact(data))}>
                    <div>
                        <label htmlFor="idPessoa">ID da Pessoa:</label>
                        <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                        {errors.idPessoa && <p>{errors.idPessoa.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="tipoContato">Tipo:</label>
                        <select id="tipoContato" {...register("tipoContato")} defaultValue={state.tipoContato}>
                            <option value="RESIDENCIAL">Residencial</option>
                            <option value="COMERCIAL">Comercial</option>
                        </select>
                        {errors.tipoContato && <p>{errors.tipoContato.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="telefone">Telefone</label>                        
                        <InputMask mask="(99)99999-9999" type="telefone" id="telefone" {...register("telefone")} defaultValue={state.telefone}/>
                        {errors.telefone && <p>{errors.telefone.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="descricao">Descrição</label>
                        <input type="text" id="descricao" {...register("descricao")} defaultValue={state.descricao}/>
                        {errors.descricao && <p>{errors.descricao.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="idContato">ID da Contato:</label>
                        <input type="text" id="idContato" {...register("idContato")} value={state.idContato}/>
                        {errors.idContato && <p>{errors.idContato.message}</p>}
                    </div>

                    
                    <input type="submit" value="Confirmar" />
                    
                </form>
            </InnerContainer>
        </Container>
    )
}