import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 88vh;
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
        align-items: flex-end;
        justify-content: center;
        height: 100px;
        font-weight: 700;
        width: 90%;
        padding-bottom: 12px;
        padding-left: 10%;
        font-size: 2rem;
        font-family: 'Lora', serif !important;
        color: var(--text-color);
        position: fixed;
        background-color: var(--background-color);
        user-select: none;
    }
`

export const DashboardContent = styled.div`
    margin-top: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    padding-bottom: 40px;
`

export const PersonCard = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 74vw;
    height: 120px;
    background-color: white;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    gap: 10px;
    padding: 20px;
    transition: 1s;
    border: 2px solid var(--background-color);
    &:hover {
        transition: 1s;
        transform: scale(1.02);
    }
    .card-content{
        display: flex;
        align-items: center;
        gap: 40px;
        font-size: 0.9rem;
        div{
            display: flex;
            flex-direction: column;
            width: 340px;
            gap: 24px;
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
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border: none;
            outline: none;
            border-radius: 50%;
            color: #fff;
            font-size: 0.875rem;
            transition: 0.5s;
            cursor: pointer;
            &:first-child:hover {
                transition: 0.5s;
                transform: scale(1.1);
                background-color: #f8b206;
            }
            &:nth-child(2):hover {
                transition: 0.5s;
                transform: scale(1.1);
                background-color: #73d77d;
            }
            &:nth-child(3):hover {
                transition: 0.5s;
                transform: scale(1.1);
                background-color: #0d6efd;
            }
            &:last-child:hover {
                transition: 0.5s;
                transform: scale(1.1);
                background-color: #ff0000;
            }
        }
    }
`