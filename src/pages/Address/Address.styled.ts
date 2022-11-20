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
        user-select: none;
    }
`

export const AddressContent = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;
`

export const AddressCard = styled.div`
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
            span {
                font-weight: 600;
                font-size: 0.9rem;
                color: var(--primary-blue);
                user-select: none;
            }
        }
    }
    .card-buttons{
        display: flex;
        gap: 14px;
        button {
            background-color: var(--light-blue);
            padding: 10px 10px;
            border: none;
            outline: none;
            border-radius: 32px;
            color: #fff;
            font-size: 0.875rem;
            transition: 0.6s;
            cursor: pointer;
            &:first-child:hover {
                transition: 0.6s;
                transform: scale(1.1);
                background-color: #0d6efd;
            }
            &:last-child:hover {
                transition: 0.6s;
                transform: scale(1.1);
                background-color: #ff0000;
            }
        }
    }
`