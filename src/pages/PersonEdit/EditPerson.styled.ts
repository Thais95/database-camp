import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 92vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar {
        width: 14px;
        margin-top: 80px;
    }
    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 10px 10px #ccc;
        border: solid 2px transparent;
        border-radius: 15px;
    }
    ::-webkit-scrollbar-thumb {
        box-shadow: inset 0 0 10px 10px var(--primary-color);
        border: solid 2px transparent;
        border-radius: 15px;
    }
    h1 {
        width: 100%;
        margin-top: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        font-size: 2.1rem;
        font-family: 'Lora', serif !important;
        color: var(--text-color);
        user-select: none;
    }
`

export const PersonContent = styled.div`
    margin-top: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    form {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 22px;
        div {
            display: flex;
            flex-direction: column;
            gap: 6px;
            label {
                font-size: 0.9rem;
                font-weight: 600;
            }
            input[type=text], input[type=date], input[type=select] {
                background-color: white;
                width: 380px;
                height: 45px;
                border-radius: 10px;
                font-size: 1rem;
                padding: 0 15px;
                border: 2px solid var(--light-blue);
                box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
                transition: 0.5s;
                &:focus {
                    border-color: var(--soft-blue);
                    transition: 0.5s;
                }
            }
            input[type=submit], input[type=button] {
                margin-top: 24px;
                width: 220px;
                height: 45px;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: 600;
                color: var(--background-color);
                background-color: var(--primary-blue);
                border: none;
                cursor: pointer;
                transition: 0.5s;
                &:hover {
                    transition: 0.5s;
                    background-color: var(--light-blue);
                }
            }
            input[type=button] {
                margin-top: 10px;
                background-color: transparent;
                color: var(--primary-blue);
                border: 2px solid var(--primary-blue);
                transition: 0.5s;
                &:hover {
                    border-color: var(--soft-blue);
                    color: var(--soft-blue);
                    background-color: transparent;
                    transition: 0.5s;
                }
            }
        }
    }
`