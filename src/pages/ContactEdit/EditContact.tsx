import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { IContacts } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../utils/schemas';
import InputMask from 'react-input-mask';
import { useLocation, useNavigate } from 'react-router-dom';
import { ContactContext } from '../../context/ContactContext';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import { ContactContent, ContentContainer } from './EditContact.styled';

export const EditContact = () => {
    const navigate = useNavigate();
    const { state } = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm<IContacts>({
        resolver: yupResolver(contactFormSchema)
    });
    const { editContact } = useContext(ContactContext);

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <h1>Editar Contato</h1>
                    <ContactContent>
                        <form onSubmit={handleSubmit((data: IContacts) => editContact(data))}>

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
                                <InputMask mask="(99)99999-9999" type="telefone" id="telefone" {...register("telefone")} defaultValue={state.telefone} />
                                {errors.telefone && <p>{errors.telefone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="descricao">Descrição</label>
                                <input type="text" id="descricao" {...register("descricao")} defaultValue={state.descricao} />
                                {errors.descricao && <p>{errors.descricao.message}</p>}
                            </div>

                            <div style={{ display: 'none' }}>
                                <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa} />
                                <input type="text" id="idContato" {...register("idContato")} value={state.idContato} />
                            </div>

                            <div>
                                <input type="submit" value="Salvar" />

                                <input type="button" value="Cancelar" onClick={() => (navigate('/contact'))} />
                            </div>
                        </form>
                    </ContactContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}