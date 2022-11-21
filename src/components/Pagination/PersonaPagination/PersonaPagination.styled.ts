import styled from 'styled-components';

export const PaginationContainer = styled.div`
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 5px;
    background-color: var(--primary-color);
    position: fixed;
    gap: 18px;
    bottom: 0;
    .chevron {
        padding-bottom: 5px;
        transition: all ease-in-out 50ms;
        &:hover{
            fill: var(--detail-color);
        }
    }
    a {
        display: flex;
        width: 20px;
        align-items: flex-end;
        font-size: 1.065rem;
        font-weight: 500;
        color: var(--background-color);
        user-select: none;
        transition: all ease-in-out 50ms;
        &:hover {
            color: var(--detail-color);
        }
        
    }
`