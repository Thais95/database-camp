import styled from 'styled-components';

export const ContentContainer = styled.div`
    margin-top: 80px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
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
        align-items: center;
        height: 100px;
        font-weight: 600;
        width: 90%;
        padding-top: 40px;
        padding-left: 220px;
        font-size: 1.8rem;
        color: var(--text-color);
        position: fixed;
        background-color: var(--background-color);
    }
`

export const ContactContent = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;
`

export const ContactCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 74vw;
    height: 120px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    gap: 10px;
    padding: 20px;

    .card-content{
        display: flex;
        align-items: center;
        gap: 40px;

        div{
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
    }

    .card-buttons{
        display: flex;
        gap: 8px;

        button{
            background-color: var(--light-blue);
            padding: 12px 12px;
            border: none;
            outline: none;
            border-radius: 32px;
            color: #fff;
            font-size: 0.875rem;
        }
    }
`