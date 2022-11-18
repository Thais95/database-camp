import axios from "axios";
import { createContext, useState } from "react";
import { IChildren, IAddressContext } from "../utils/interfaces";
import nProgress from "nprogress";

export const AddressContext = createContext({} as IAddressContext);

export const AddressProvider = ({ children }: IChildren ) => {
    const [addressFromApi, setAddressFromApi] = useState<Record<string, string>>({});

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

    return (
        <AddressContext.Provider value={{ getAddressByCep, addressFromApi }}>
            {children}
        </AddressContext.Provider>
    )
}
