import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 92vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    background-color: var(--primary-color);
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
    div {
        display: flex;
        flex-direction: column;
        gap: 50px;
        width: 400px;
        margin-right: -200px;
        h1 {
            font-weight: 700;
            font-size: 3rem;
            font-family: 'Lora', serif !important;
            color: var(--background-color);
            user-select: none;
        }
        span {
            color: var(--detail-color);
        }
        h3 {
            font-size: 1.4rem;
            font-weight: 400;
            color: white;
        }
    }
    img {
        height: 90%;
        -webkit-user-drag: none;
    }
`