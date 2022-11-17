import React from 'react';

export interface IUser {
    login: string,
    senha: string
}

export interface IChildren {
    children?: React.ReactNode
}

export interface IAuthContext {
    userSignup: (newUser: IUser) => Promise<void>,
    handleLogin: (user: IUser) => Promise<void>,
    handleLogout: () => Promise<void>
}

export interface IPersona {
    nome: string,
    dataNascimento: string,
    cpf: string,
    email: string
}

export interface IPersonasContext {
    createPersona: (Persona: IPersona) => Promise<void>
}

export interface IAddress {
    cep: string,
    tipo: string,
    logradouro: string,
    numero: number,
    complemento: string,
    cidade: string,
    estado: string,
    pais: string
}

export interface IAddressContext {
    getAddressByCep: (cep: string) => Promise<void>,
    addressFromApi: Record<string, string>
}