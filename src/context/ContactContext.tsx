import nProgress from 'nprogress';
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../utils/api';
import { IChildren, IContactContext, IContacts } from '../utils/interfaces';
import { toastConfig } from '../utils/toast';

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IChildren) => {

    const token = localStorage.getItem('token');
    const navigate = useNavigate();

    const [contacts, setContacts] = useState<IContacts[]>([]);

    const getContactList = async () => {
        try {
            nProgress.start();

            api.defaults.headers.common['Authorization'] = token;
            const { data } = await api.get(`/contato`);

            setContacts(data);
        } catch (error) {
            console.error(error);
            toast.error('Houve algum erro, por favor recarregue a página', toastConfig);
        } finally {
            nProgress.done();
        }
    }

    const deleteContact = async (idContact: number) => {
        try {
            nProgress.start();

            api.defaults.headers.common['Authorization'] = token;
            await api.delete(`/contato/${idContact}`);

            toast.success('Contato deletado com sucesso!', toastConfig);
            getContactList();
        } catch (error) {
            toast.error('Ocorreu algum erro, tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const editContact = async (data: IContacts) => {
        try {
            nProgress.start();

            api.defaults.headers.common['Authorization'] = token;
            await api.put(`/contato/${data.idContato}`, data);

            toast.success("Contato editado com sucesso!", toastConfig);
            navigate('/contact');
        } catch (error) {
            console.error(error);
            console.log(data);
            toast.error("Ocorreu algum erro, tente novamente!", toastConfig);
        } finally {
            nProgress.done();
        };
    };


    return (
        <ContactContext.Provider value={{ getContactList, contacts, deleteContact, editContact }}>
            {children}
        </ContactContext.Provider>
    )
}