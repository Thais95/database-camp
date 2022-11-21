import styled from 'styled-components';

export const ErrorContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--primary-color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1, h2 {
        color: white;
        user-select: none;
    }
    h1 {
        font-size: 10rem;
    }
    h2 {
        font-size: 3rem;
    }
    a {
        margin-top: 80px;
        width: 240px;
        height: 45px;
        border-radius: 12px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--detail-color);
        font-weight: 700;
        color: white;
        box-shadow: 0px 0px 10px rgba(246, 107, 92, 0.58);
        transition: 0.5s;
        &:hover {
            transition: 0.5s;
            transform: scale(1.05);
        }
    }
`