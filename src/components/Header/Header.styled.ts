import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    top: 0;
    position: relative;
    display: flex;
    justify-content: center;
    nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: calc(100% - 300px);
        height: 80px;
        padding: 0 40px;
        position: fixed;
        ul {
            display: flex;
            gap: 44px;
        }
        a, p {
            font-size: 1.2rem;
            font-weight: 500;
            color: var(--text-color);
            transition: all ease-in-out 150ms;
            &:hover {
                color: var(--light-blue);
            }
        }
        p {
            cursor: pointer;
            color: var(--text-color);
            font-weight: 500;
            transition: all ease-in-out 150ms;
            &:hover{
                color: var(--light-blue);
                }
        }
    }
    .border {
        width: 96%;
        border-bottom: 4px solid white;
        position: absolute;
        top: 76px;
        padding: 0 40px;
        z-index: 2;
    }
`