import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { IContacts } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { contactFormSchema } from '../../utils/schemas';
import { Container, ContentContainer, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import InputMask from 'react-input-mask';
import { ContactContext } from '../../context/ContactContext';
import { useLocation } from 'react-router-dom';

export const CreateContact = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IContacts>({
        resolver: yupResolver(contactFormSchema)
    });
    const { createContact } = useContext(ContactContext);

    const { state } = useLocation();

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <form onSubmit={handleSubmit((data: IContacts) => createContact(data))}>
                        <div>
                            <label htmlFor="tipoContato">Tipo:</label>
                            <select id="tipoContato" {...register("tipoContato")}>
                                <option value="RESIDENCIAL">Residencial</option>
                                <option value="COMERCIAL">Comercial</option>
                            </select>
                            {errors.tipoContato && <p>{errors.tipoContato.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="telefone">Telefone</label>                        
                            <InputMask mask="(99)99999-9999" type="telefone" id="telefone" {...register("telefone")}/>
                            {errors.telefone && <p>{errors.telefone.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="descricao">Descrição</label>
                            <input type="text" id="descricao" {...register("descricao")}/>
                            {errors.descricao && <p>{errors.descricao.message}</p>}
                        </div>

                        <div style={{display: 'none'}}>
                            <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                        </div>

                        <div>
                            <input type="submit" value="Cadastrar" />
                        </div>
                    </form>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}