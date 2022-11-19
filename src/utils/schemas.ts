import * as yup from 'yup';

export const userFormSchema = yup.object().shape({
    login: yup.string().required('Por favor, digite seu login!').min(2, 'O login deve ter no mínimo 2 caracteres').trim(),
    senha: yup.string().required('Por favor, digite sua senha!').min(3, 'A senha deve ter no mínimo 3 caracteres').trim()
})

export const userSignupFormSchema = yup.object().shape({
    login: yup.string().required('Campo login é obrigatório').min(2, 'O login deve ter no mínimo 2 caracteres').trim(),
    senha: yup.string().required('Campo senha é obrigatório').min(3, 'A senha deve ter no mínimo 3 caracteres').trim()
})

export const personaFormSchema = yup.object().shape({
    nome: yup.string().required('Por favor, digite seu nome').min(2, 'O nome precisa ter no mínimo 2 caracteres'),
    dataNascimento: yup.string().required('Por favor, digite sua data de nascimento').trim(),
    cpf: yup.string().required('Por favor, digite seu CPF').length(14, 'O CPF precisa conter 11 dígitos').trim(),
    email: yup.string().required('Por favor, digite seu email').email('Por favor, digite um email válido').trim()
})

export const addressFormSchema = yup.object().shape({
    cep: yup.string().required('Por favor, digite o CEP').length(9, 'O CEP precisa ter 8 dígitos').trim(),
    tipo: yup.string().required('O tipo é obrigatório').trim(),
    logradouro: yup.string().required('O logradouro é obrigatório').trim(),
    numero: yup.number().required('O número é obrigatório').min(1, 'O número não pode ser menor do que 1'),
    complemento: yup.string().trim(),
    cidade: yup.string().required('A cidade é obrigatória').min(3, 'A cidade precisa ter no mínimo 3 letras').trim(),
    estado: yup.string().required('O estado é obrigatório'),
    pais: yup.string().required('O país é obrigatório').trim()
})