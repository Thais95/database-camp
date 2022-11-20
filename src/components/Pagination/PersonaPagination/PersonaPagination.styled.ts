import styled from 'styled-components';

export const PaginationContainer = styled.div`
    width: 100%;
    height: 34px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--primary-color);
    position: fixed;
    gap: 5px;
    bottom: 0;
    a {
        color: var(--background-color);
        &:hover {
            color: var(--detail-color);
        }
    }
`