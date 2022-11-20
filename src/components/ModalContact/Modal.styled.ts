import styled from 'styled-components';

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 2;
`

export const CloseModal = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;
`

export const Modal = styled.div`
    position: fixed;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    gap: 20px;
    align-items: center;
    text-align: center;
    padding: 20px;
    width: 400px;
    height: 300px;
    border-radius: 12px;
    z-index: 3;
    font-size: 1.1rem;
    h3 {
        user-select: none;
        width: 300px;
        font-weight: 600;
        margin-bottom: 30px;
        span {
            color: var(--primary-blue);
            font-weight: 700;
        }
    }
    button {
        width: 220px;
        height: 40px;
        border-radius: 50px;
        border: none;
        background: #f45475;
        cursor: pointer;
        color: white;
        font-size: 0.9rem;
        font-weight: 600;
        transition: 0.5s;
        &:hover {
            background-color: #fe0234;
            transition: 0.5s;
        }
    }
    button:last-child {
        background-color: var(--primary-blue);
        transition: 0.5s;
        &:hover {
            background-color: var(--light-blue);
            transition: 0.5s;
        }
    }
`