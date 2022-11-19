import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IAuthContext, IChildren, IUser } from '../utils/interfaces';
import { api } from '../utils/api';
import { toast } from 'react-toastify';
import { toastConfig } from '../utils/toast';
import nProgress from 'nprogress';

export const AuthContext = createContext({} as IAuthContext);

export const AuthProvider = ({ children }: IChildren) => {
    const navigate = useNavigate();

    const userSignup = async (newUser: IUser) => {
        try {
            nProgress.start();
            
            await api.post('/auth/create', newUser);

            toast.success('Usuário cadastrado com sucesso!', toastConfig);
           
            navigate('/');
        } catch (error) {
            toast.error('Houve algum erro, por favor tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const handleLogin = async (user: IUser) => {
        try {
            nProgress.start();

            const { data } = await api.post('/auth', user);
            api.defaults.headers.common['Authorization'] = data;
    
            localStorage.setItem('token', data);
            localStorage.setItem('user', user.login);

            navigate('/dashboard')
        } catch (error) {
            toast.error('Houve algum erro, por favor tente novamente!', toastConfig);
            console.log(error);
        } finally {
            nProgress.done();
        }
    }

    const handleLogout = async () => {
        localStorage.removeItem('token');
        api.defaults.headers.common['Authorization'] = undefined;
        
        localStorage.removeItem('user');
        navigate('/');
    }

    return (
        <AuthContext.Provider value={{ userSignup, handleLogin, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )
}
