import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { IAddress } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressFormSchema } from '../../utils/schemas';
import { Container, ContentContainer, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import InputMask from 'react-input-mask';
import { useLocation } from 'react-router-dom';
import { AddressContext } from '../../context/AddressContext';

export const CreateAddress = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<IAddress>({
        resolver: yupResolver(addressFormSchema)
    });
    const { createAddress } = useContext(AddressContext);

    const { state } = useLocation();
    
    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <form onSubmit={handleSubmit((data: IAddress) => createAddress(data))}>

                        <div>
                            <label htmlFor="cep">CEP:</label>
                            
                            <InputMask mask="99999-999" type="text" id="cep" {...register("cep")}/>
                            {errors.cep && <p>{errors.cep.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="tipo" >Tipo do endereço:</label>
                            <select id="tipo" {...register("tipo")}>
                                <option value="COMERCIAL">Comercial</option>
                                <option value="RESIDENCIAL">Residencial</option>
                            </select>
                            {errors.tipo && <p>{errors.tipo.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="pais">País:</label>
                            <input type="text" id="pais" {...register("pais")}/>
                            {errors.pais && <p>{errors.pais.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="estado">Estado:</label>
                            <input type="text" id="estado" {...register("estado")}/>
                            {errors.estado && <p>{errors.estado.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="cidade">Cidade:</label>
                            <input type="text" id="cidade" {...register("cidade")}/>
                            {errors.cidade && <p>{errors.cidade.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="logradouro">Logradouro:</label>
                            <input type="text" id="logradouro" {...register("logradouro")}/>
                            {errors.logradouro && <p>{errors.logradouro.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="numero">Número:</label>
                            <input type="text" id="numero" {...register("numero")}/>
                            {errors.numero && <p>{errors.numero.message}</p>}
                        </div>

                        <div>
                            <label htmlFor="complemento">Complemento:</label>
                            <input type="text" id="complemento" {...register("complemento")}/>
                            {errors.complemento && <p>{errors.complemento.message}</p>}
                        </div>

                        <div style={{display: 'none'}}>
                            <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                        </div>

                        <div>
                            <input type="submit" value="Adicionar endereço" />
                        </div>
                    </form>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}