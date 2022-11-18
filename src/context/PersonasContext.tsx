import { createContext, useContext, useState } from "react";
import { IPersonasContext, IChildren, IPersona } from "../utils/interfaces";
import { api } from "../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";
import nProgress from "nprogress";
import { AuthContext } from "./AuthContext";

export const PersonasContext = createContext({} as IPersonasContext);

export const PersonasProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');

  const [ persona, setPersona ] = useState<IPersona[]>();



  const createPersona = async (persona: IPersona) => {
    try {
      nProgress.start();
      persona.cpf = persona.cpf.replace(/[^\d]/g, '');

      api.defaults.headers.common['Authorization'] = token;
      await api.post('/pessoa', persona);

      toast.success('Pessoa cadastrada com sucesso!', toastConfig);
    } catch (error) {
      toast.error('Ocorreu algum erro, por favor tente novamente!', toastConfig);
      console.error(error);
    } finally {
      nProgress.done();
    }
  }

  const getPersonasList = async () => {
    try{
      nProgress.start();
      const { data } = await api.get('/pessoa');
      api.defaults.headers.common['Authorization'] = token;
      console.log(data.content);
      setPersona(data.content)
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu algum erro, por favor tente novamente!', toastConfig)
    } finally {
      nProgress.done();
    }
  }

  return (
    <PersonasContext.Provider value={{ createPersona, getPersonasList, persona }}>
      {children}
    </PersonasContext.Provider>
  )

}