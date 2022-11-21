import { useForm } from 'react-hook-form';
import { useContext, useEffect } from 'react';
import { IAddress } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressFormSchema } from '../../utils/schemas';
import { AddressContent, ContentContainer } from './AddressEdit.styled';
import { useLocation, useNavigate } from 'react-router-dom';
import { AddressContext } from '../../context/AddressContext';
import InputMask from 'react-input-mask';
import { Header } from '../../components/Header/Header';
import { Container, InnerContainer } from '../../components/MainContainer/Container.styled';

export const EditAddress = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<IAddress>({
        resolver: yupResolver(addressFormSchema)
    });
    const { editAddress, getAddressByCep, addressFromApi } = useContext(AddressContext);

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
                    <h1>Editar Endereço</h1>
                    <AddressContent>
                        <form onSubmit={handleSubmit((data: IAddress) => editAddress(data))}>
                            <div>
                                <label htmlFor="cep">CEP:</label>
                                <InputMask mask="99999-999" type="text" id="cep" {...register("cep") } defaultValue={state.cep} onBlur={() => getAddressByCep(cep)} />
                                {errors.cep && <span>{errors.cep.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="tipo" >Tipo do endereço:</label>
                                <select id="tipo" {...register("tipo")} defaultValue={state.tipo}>
                                    <option value="COMERCIAL">Comercial</option>
                                    <option value="RESIDENCIAL">Residencial</option>
                                </select>
                                {errors.tipo && <span>{errors.tipo.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="pais">País:</label>
                                <input type="text" id="pais" {...register("pais")} defaultValue={state.pais} />
                                {errors.pais && <span>{errors.pais.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="estado">Estado:</label>
                                <input type="text" id="estado" {...register("estado")} defaultValue={state.estado} />
                                {errors.estado && <span>{errors.estado.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="cidade">Cidade:</label>
                                <input type="text" id="cidade" {...register("cidade")} defaultValue={state.cidade} />
                                {errors.cidade && <span>{errors.cidade.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="logradouro">Logradouro:</label>
                                <input type="text" id="logradouro" {...register("logradouro")} defaultValue={state.logradouro} />
                                {errors.logradouro && <span>{errors.logradouro.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="numero">Número:</label>
                                <input type="text" id="numero" {...register("numero")} defaultValue={state.numero} />
                                {errors.numero && <span>{errors.numero.message}</span>}
                            </div>

                            <div>
                                <label htmlFor="complemento">Complemento:</label>
                                <input type="text" id="complemento" {...register("complemento")} defaultValue={state.complemento} />
                                {errors.complemento && <span>{errors.complemento.message}</span>}
                            </div>

                            <div style={{ display: 'none' }}>
                                <input type="text" id="idEndereco" {...register("idEndereco")} value={state.idEndereco} />
                                <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa} />
                            </div>

                            <div>
                                <input type="submit" value="Salvar" />

                                <input type="button" value="Cancelar" onClick={() => (navigate('/address'))} />
                            </div>
                        </form>
                    </AddressContent>
                </ContentContainer>
            </InnerContainer>
        </Container>
    )
}