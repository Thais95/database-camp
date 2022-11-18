import { createContext, useState } from "react";
import { IPersonasContext, IChildren, IPersona } from "../utils/interfaces";
import { api } from "../utils/api";
import { toast } from "react-toastify";
import { toastConfig } from "../utils/toast";
import nProgress from "nprogress";
import { useNavigate } from "react-router-dom";

export const PersonasContext = createContext({} as IPersonasContext);

export const PersonasProvider = ({ children }: IChildren) => {
  const token = localStorage.getItem('token');

  const [ persona, setPersona ] = useState<IPersona[]>([]);

  const navigate = useNavigate();

  const createPersona = async (persona: IPersona) => {
    try {
      nProgress.start();
      persona.cpf = persona.cpf.replace(/[^\d]/g, '');

      api.defaults.headers.common['Authorization'] = token;
      console.log(persona);
      
      await api.post('/pessoa', persona);
      console.log(persona);
      
      toast.success('Pessoa cadastrada com sucesso!', toastConfig);
      navigate('/dashboard')
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

      api.defaults.headers.common['Authorization'] = token;
      const { data } = await api.get('/pessoa');

      setPersona(data.content)
    } catch (error) {
      console.error(error);
      toast.error('Ocorreu algum erro, por favor tente novamente!', toastConfig)
    } finally {
      nProgress.done();
    }
  }

  const editPersona = async (data: IPersona) => {
    try{
      nProgress.start()
      
      data.cpf = data.cpf.replace(/[^\d]/g, '');
      await api.put(`/pessoa/${data.idPessoa}`, data);

      toast.success("Usuário editado!", toastConfig);
      navigate('/dashboard');
    } catch (error){
        console.error(error);
        console.log(data);
        toast.error("Algo deu errado, tente novamente", toastConfig);
    } finally{
        nProgress.done();
    };
  };

  const deletePersona = async (idPessoa: string) => {
    try {
        nProgress.start();

        api.defaults.headers.common['Authorization'] = token;
        await api.delete(`/pessoa/${idPessoa}`);

        toast.success('Usuário deletado com sucesso!', toastConfig);
        getPersonasList();
    } catch (error) {
        toast.error('Ocorreu algum erro, tente novamente!', toastConfig);
        console.log(error);
    } finally {
        nProgress.done();
    }
}

  return (
    <PersonasContext.Provider value={{ createPersona, getPersonasList, persona, editPersona, deletePersona }}>
      {children}
    </PersonasContext.Provider>
  )

}