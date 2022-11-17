import { createContext, useContext } from "react";
import { IPersonasContext, IChildren, IPersona } from "../utils/interfaces";
import { api } from "../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";
import nProgress from "nprogress";
import { AuthContext } from "./AuthContext";

export const PersonasContext = createContext({} as IPersonasContext);

export const PersonasProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');

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

  return (
    <PersonasContext.Provider value={{ createPersona }}>
      {children}
    </PersonasContext.Provider>
  )

}