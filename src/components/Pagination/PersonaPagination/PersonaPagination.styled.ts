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
    gap: 20px;
    bottom: 0;
    .chevron {
        padding-bottom: 5px;
    }
    a {
        display: flex;
        align-items: flex-end;
        font-size: 1.065rem;
        font-weight: 500;
        color: var(--background-color);
        &:hover {
            color: var(--detail-color);
        }
    }
`