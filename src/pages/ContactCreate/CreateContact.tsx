import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { IContacts } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import InputMask from 'react-input-mask';
import { ContactContext } from '../../context/ContactContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContactContent, ContentContainer } from './CreateContact.styled';

export const CreateContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IContacts>({
        resolver: yupResolver(contactFormSchema)
    });
    const { createContact } = useContext(ContactContext);
    const navigate = useNavigate();

    const { state } = useLocation();

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <h1>Adicionar contato</h1>
                    <ContactContent>
                    <form onSubmit={handleSubmit((data: IContacts) => createContact(data))}>
                        <div>
                            <label htmlFor="tipoContato">Tipo:</label>
                            <select id="tipoContato" {...register("tipoContato")}>
                                <option value="RESIDENCIAL">Residencial</option>
                                <option value="COMERCIAL">Comercial</option>
                            </select>
                            {errors.tipoContato && <span>{errors.tipoContato.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="telefone">Telefone</label>                        
                            <InputMask mask="(99)99999-9999" type="text" id="telefone" {...register("telefone")}/>
                            {errors.telefone && <span>{errors.telefone.message}</span>}
                        </div>

                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" id="descricao" {...register("descricao")}/>
                            {errors.descricao && <span>{errors.descricao.message}</span>}
                        </div>

                        <div style={{display: 'none'}}>
                            <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                        </div>

                        <div>
                            <input type="submit" value="Adicionar" />

                            <input type="button" value="Cancelar" onClick={() => (navigate('/people'))} />
                        </div>
                    </form>
                    </ContactContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}