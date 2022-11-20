import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { IAddress } from '../../utils/interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { addressFormSchema } from '../../utils/schemas';
import { Container, InnerContainer } from './AddressEdit.styled';
import { useLocation } from 'react-router-dom';
import { AddressContext } from '../../context/AddressContext';

export const EditAddress = () => {
    const { state } = useLocation();

    const { register, handleSubmit, formState: { errors } } = useForm<IAddress>({
        resolver: yupResolver(addressFormSchema)
    });
    const { editAddress } = useContext(AddressContext);

    return (
        <Container>
            <InnerContainer>
                <h1>Editar Endereço</h1>
                <form onSubmit={handleSubmit((data: IAddress) => editAddress(data))}>

                    <div>
                        <label htmlFor="cep">CEP:</label>
                        <input type="text" id="cep" {...register("cep")} defaultValue={state.cep}/>
                        {errors.cep && <p>{errors.cep.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="tipo" >Tipo do endereço:</label>
                        <select id="tipo" {...register("tipo")} defaultValue={state.tipo}>
                            <option value="COMERCIAL">Comercial</option>
                            <option value="RESIDENCIAL">Residencial</option>
                        </select>
                        {errors.tipo && <p>{errors.tipo.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="pais">País:</label>
                        <input type="text" id="pais" {...register("pais")} defaultValue={state.pais}/>
                        {errors.pais && <p>{errors.pais.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="estado">Estado:</label>
                        <input type="text" id="estado" {...register("estado")} defaultValue={state.estado}/>
                        {errors.estado && <p>{errors.estado.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="cidade">Cidade:</label>
                        <input type="text" id="cidade" {...register("cidade")} defaultValue={state.cidade}/>
                        {errors.cidade && <p>{errors.cidade.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="logradouro">Logradouro:</label>
                        <input type="text" id="logradouro" {...register("logradouro")} defaultValue={state.logradouro}/>
                        {errors.logradouro && <p>{errors.logradouro.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="numero">Número:</label>
                        <input type="text" id="numero" {...register("numero")} defaultValue={state.numero}/>
                        {errors.numero && <p>{errors.numero.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="complemento">Complemento:</label>
                        <input type="text" id="complemento" {...register("complemento")} defaultValue={state.complemento}/>
                        {errors.complemento && <p>{errors.complemento.message}</p>}
                    </div>

                    <div style={{display: 'none'}}>
                        <input type="text" id="idEndereco" {...register("idEndereco")} value={state.idEndereco}/>
                        <input type="text" id="idPessoa" {...register("idPessoa")} value={state.idPessoa}/>
                    </div>

                    <input type="submit" value="Confirmar" />
                </form>
            </InnerContainer>
        </Container>
    )
}