import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 88vh;
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
        display: flex;
        align-items: flex-end;
        justify-content: center;
        height: 100px;
        font-weight: 700;
        width: 90%;
        padding-bottom: 12px;
        padding-left: 10%;
        font-size: 2.1rem;
        font-family: 'Lora', serif;
        color: var(--text-color);
        position: fixed;
        background-color: var(--background-color);
        user-select: none;
    }
`

export const PersonContent = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 40px;
    form {
        display: flex;
        flex-direction: column;
        gap: 20px;    
        div {
            display: flex;
            flex-direction: column;
            input[type=text], input[type=date], input[type=select] {
                background-color: white;
                width: 380px;
                height: 35px;
                border-radius: 10px;
                font-size: 1.1rem;
                padding: 22px 15px;
                border: 2px solid var(--soft-blue) !important;
                box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
                transition: 0.5s;
                &:focus {
                    border-color: var(--primary-blue);
                    transition: 0.8s;
                }
            }
        }
    }
`