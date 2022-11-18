import styled from 'styled-components';

export const ContentContainer = styled.div`
    margin-top: 80px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 0 40px;
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
        height: 80px;
        width: 80%;
        margin-left: -30px;
        padding-left: 30px;
        font-size: 1.8rem;
        color: var(--text-color);
        position: fixed;
        background-color: var(--background-color);
    }
`

export const DashboardContent = styled.div`
    margin-top: 100px;
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
    width: 78vw;
    height: 100px;
    background-color: white;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    gap: 10px;
    padding: 20px;

    .card-content{
        display: flex;
        align-items: center;
        gap: 30px;

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