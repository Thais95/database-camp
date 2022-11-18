import { useContext } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export const PrivateRoute = () => {
    
    const token = localStorage.getItem('token');
    

    return token ? <Outlet /> : <Navigate to='/' />
}