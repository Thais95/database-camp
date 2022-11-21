import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { IAddress } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';
import { Header } from '../../components/Header/Header';
import InputMask from 'react-input-mask';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddressContext } from '../../context/AddressContext';
import { AddressContent, ContentContainer } from './CreateAddress.styled';

export const CreateAddress = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IAddress>({
        resolver: yupResolver(addressFormSchema)
    });
    const { createAddress, getAddressByCep, addressFromApi } = useContext(AddressContext);
    const navigate = useNavigate();

    const { state } = useLocation();

    const cep = watch('cep');

    useEffect(() => {
        setValue('logradouro', addressFromApi?.logradouro);
        setValue('cidade', addressFromApi?.localidade);
        setValue('estado', addressFromApi?.uf);
    }, [addressFromApi]);

    return (
        <Container>
            <InnerContainer>
                <Header />
                <ContentContainer>
                    <h1>Adicionar endereço para</h1>
                    <h2>{state.nome}</h2>
                    <AddressContent>
                        <form onSubmit={handleSubmit((data: IAddress) => createAddress(data))}>

                            <div>
                                <label htmlFor="cep">CEP:</label>
                                <InputMask mask="99999-999" type="text" id="cep" {...register("cep")} onBlur={() => getAddressByCep(cep)} />
                                {errors.cep && <span>{errors.cep.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="tipo" >Tipo do endereço:</label>
                                <select id="tipo" {...register("tipo")}>
                                    <option value="COMERCIAL">Comercial</option>
                                    <option value="RESIDENCIAL">Residencial</option>
                                </select>
                                {errors.tipo && <span>{errors.tipo.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="pais">País:</label>
                                <input type="text" id="pais" {...register("pais")} defaultValue={'Brasil'} />
                                {errors.pais && <span>{errors.pais.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="estado">Estado:</label>
                                <input type="text" id="estado" {...register("estado")} />
                                {errors.estado && <span>{errors.estado.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" id="cidade" {...register("cidade")} />
                                {errors.cidade && <span>{errors.cidade.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="logradouro">Logradouro:</label>
                                <input type="text" id="logradouro" {...register("logradouro")} />
                                {errors.logradouro && <span>{errors.logradouro.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="numero">Número:</label>
                                <input type="text" id="numero" {...register("numero")} />
                                {errors.numero && <span>{errors.numero.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="complemento">Complemento:</label>
                                <input type="text" id="complemento" {...register("complemento")} />
                                {errors.complemento && <span>{errors.complemento.message}</span>}
                            </div>

                            <div style={{ display: 'none' }}>
                                <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa} />
                            </div>

                            <div>
                                <input type="submit" value="Adicionar" />

                                <input type="button" value="Cancelar" onClick={() => (navigate('/people'))} />
                            </div>
                        </form>
                    </AddressContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}