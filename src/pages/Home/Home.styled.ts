import styled from 'styled-components';

export const ContentContainer = styled.div`
    height: 92vh;
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
        height: 100px;
        font-weight: 700;
        width: 90%;
        padding-bottom: 10px;
        padding-left: 220px;
        font-size: 2rem;
        font-family: 'Lora', serif !important;
        color: var(--text-color);
        position: fixed;
        background-color: var(--background-color);
        user-select: none;
    }
`