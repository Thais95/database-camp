import axios from 'axios';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../utils/api';
import { IChildren, IAddressContext, IAddress } from '../utils/interfaces';
import { toast } from 'react-toastify';
import { toastConfig } from '../utils/toast';
import nProgress from 'nprogress';

export const AddressContext = createContext({} as IAddressContext);

export const AddressProvider = ({ children }: IChildren) => {
    const [addressFromApi, setAddressFromApi] = useState<Record<string, string>>({});
    const [address, setAddress] = useState<IAddress[]>([]);
    const [totalPages, setTotalPages] = useState(0);

    const navigate = useNavigate();
    const token = localStorage.getItem('token');

    const getAddressByCep = async (cep: string) => {
        try {
            nProgress.start();

            cep = cep.replace(/[^\d]/g, '');
            const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);

            setAddressFromApi(data);
        } catch (error) {
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const getAddressList = async (page: string) => {
        try {
            nProgress.start();

            api.defaults.headers.common['Authorization'] = token;
            const { data } = await api.get(`/endereco?pagina=${parseInt(page) - 1}&tamanhoDasPaginas=10`);
            setTotalPages(data.totalPages);

            setAddress(data.content);
        } catch (error) {
            console.error(error);
            toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
        } finally {
            nProgress.done();
        }
    }

    const editAddress = async (data: IAddress) => {
        try {
            nProgress.start();
            data.cep = data.cep.replace(/[^\d]/g, '');

            api.defaults.headers.common['Authorization'] = token;
            await api.put(`/endereco/${data.idEndereco}`, data);

            toast.success("Endereço editado com sucesso!", toastConfig);
            navigate('/address');
        } catch (error) {
            console.error(error);
            console.log(data);
            toast.error("Ocorreu algum erro, tente novamente!", toastConfig);
        } finally {
            nProgress.done();
        }
    }

    const deleteAddress = async (idAddress: number) => {
        try {
            nProgress.start();

            api.defaults.headers.common['Authorization'] = token;
            await api.delete(`/endereco/${idAddress}`);

            toast.success('Endereço deletado com sucesso!', toastConfig);
            getAddressList('1');
        } catch (error) {
            toast.error('Ocorreu algum erro, tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const createAddress = async (data: IAddress) => {
        try {
            nProgress.start();
            data.cep = data.cep.replace(/[^\d]/g, '');

            api.defaults.headers.common['Authorization'] = token;
            
            data.numero = Number(data.numero)
            data.idPessoa = Number(data.idPessoa)
            
            await api.post(`/endereco/${data.idPessoa}?idPessoa=${data.idPessoa}`, data);

            toast.success('Endereço adicionado com sucesso!', toastConfig);
            navigate('/people');
        } catch (error){
            console.error(error);
            toast.error('Algo deu errado, por favor tente novamente', toastConfig);
        } finally {
            nProgress.done();
        }
    }

    return (
        <AddressContext.Provider value={{ getAddressByCep, addressFromApi, getAddressList, address, deleteAddress, editAddress, totalPages, createAddress }}>
            {children}
        </AddressContext.Provider>
    )
}
