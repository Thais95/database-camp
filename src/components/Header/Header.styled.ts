import styled from 'styled-components'

export const NavContainer = styled.nav`
        width: 100%;
        height: 8vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--primary-color);
        .logo {
            a {
                font-size: 1.8rem;
                font-weight: 600;
                color: var(--background-color);
                p {
                    font-family: 'Lora', serif !important;
                }
            }
            .logoLink {
                display: flex;
                flex-direction: row;
                align-items: center;
                gap: 10px;
                img {
                width: 40px;
                }
            }
        }
        nav {
            ul {
                display: flex;
                gap: 44px;        
                a, p {
                    font-size: 1.2rem;
                    font-weight: 500;
                    color: var(--background-color);
                    transition: all ease-in-out 150ms;
                    &:hover {
                        color: var(--light-blue);
                    }
                }
            }
        }
        .linkContainer {
            width: 74vw;
            display: flex;
            align-items: center;
            justify-content: space-between;
            div {
                display: flex;
                align-items: center;
                gap: 80px;
            }
        }
        .user {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 5px;
            user-select: none;
            margin-right: -40px;
            p {
                color: var(--background-color);
                font-weight: 500;
                font-size: 1.2rem;
            }
        }
        .deslogar {
            cursor: pointer;
            color: white;
            font-size: 1.2rem;
            font-weight: 500;
            transition: all ease-in-out 150ms;
            &:hover{
                color: var(--light-blue);
                }
        }
`