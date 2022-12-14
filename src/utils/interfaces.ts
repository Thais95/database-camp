import React from 'react';

export interface IUser {
    login: string,
    senha: string,
    confirmarSenha?: string
}

export interface IChildren {
    children?: React.ReactNode
}


// AUTHENTICATION INTERFACE

export interface IAuthContext {
    userSignup: (newUser: IUser) => Promise<void>,
    handleLogin: (user: IUser) => Promise<void>,
    handleLogout: () => Promise<void>,
}


// PERSONA INTERFACE

export interface IPersonasContext {
    createPersona: (Persona: IPersona) => Promise<void>,
    getPersonasList: (page: string) => Promise<void>,
    deletePersona: (idPessoa: string) => Promise<void>,
    editPersona: (data: IPersona ) => Promise<void>,
    persona: IPersona[],
    totalPages: number
}

export interface IPersona {
    nome: string,
    dataNascimento: string,
    cpf: string,
    email: string,
    idPessoa: number
}

export interface IDeletePersona {
    show: boolean,
    setModal: (idPessoa: boolean) => void,
    idPessoa: number | null,
    nome: string | null
}


// ADDRESS INTERFACE

export interface IAddressContext {
    getAddressByCep: (cep: string) => Promise<void>,
    getAddressList: (page: string) => Promise<void>,
    deleteAddress: (idAddress: number) => Promise<void>,
    editAddress: (data: IAddress) => Promise<void>,
    createAddress: (data: IAddress) => Promise<void>,
    addressFromApi: Record<string, string>,
    address: IAddress[],
    totalPages: number
}

export interface IAddress {
    cep: string,
    tipo: string,
    logradouro: string,
    numero: number,
    complemento: string,
    cidade: string,
    estado: string,
    pais: string,
    idEndereco: number,
    idPessoa: number
}

export interface IDeleteAddress {
    show: boolean,
    setModal: (idEndereco: boolean) => void,
    idEndereco: number | null,
    cep: string | null
}


// CONTACTS INTERFACES

export interface IContactContext {
    getContactList: () => Promise<void>,
    deleteContact: (idContact: number) => Promise<void>,
    editContact: (data: IContacts) => Promise<void>,
    createContact: (data: IContacts) => Promise<void>,
    contacts: IContacts[]
}

export interface IContacts {
    idPessoa: number
    tipoContato: string,
    telefone: string,
    descricao: string,
    idContato: number
}

export interface IDeleteContact {
    show: boolean,
    setModal: (idContato: boolean) => void,
    idContato: number | null,
    telefone: string | null
}