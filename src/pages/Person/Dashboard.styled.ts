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

    .add-btn{
        display: flex;
        justify-content: center;
        margin-top: 40px;
        
        a{
            button{
            background-color: var(--dark-blue);
            color: #ffffff;
            width: 320px;
            height: 48px;
            border: none;
            outline: none;
            border-radius: 12px;
            font-size: 1rem;
            font-weight: 600;
            transition: all ease-in-out 200ms;
            cursor: pointer;
            }

            button:hover{
                background-color: var(--light-blue);
            }   
        }
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

export const DashboardContent = styled.div`
    margin-top: 70px;
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
    @media screen and (max-width: 1600px) {
        max-width: 74vw;
        height: 140px;
    }
    @media screen and (max-width: 1199px) {
        max-width: 74vw;
        height: 200px;
        display: flex;
        flex-direction: column;
    }
    &:hover {
        transition: 1s;
        transform: scale(1.02);
    }
    .card-content{
        display: flex;
        align-items: center;
        gap: 40px;
        font-size: 0.9rem;
        .smallBox {
            width: 200px;
        }
        div{
            display: flex;
            flex-direction: column;
            width: 340px;
            gap: 24px;
            @media screen and (max-width: 1600px) {
                width: 300px;
                gap: 30px;
            }
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
                background-color: #fe76a8;
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