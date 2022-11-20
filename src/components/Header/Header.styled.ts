import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;
    top: 0;
    position: relative;
    display: flex;
    .logo {
        a {
            font-size: 1.8rem;
            font-weight: 600;
            color: white;
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
                color: white;
                transition: all ease-in-out 150ms;
                &:hover {
                    color: var(--light-blue);
                }
            }
        }
    }
`

export const NavContainer = styled.div`
        display: flex;
        align-items: center;
        width: 100%;
        height: 80px;
        background-color: var(--primary-color);
        position: fixed;
        .linkContainer {
            display: flex;
            width: 100%;
            justify-content: space-between;
            padding: 0 220px;
            div {
                display: flex;
                align-items: center;
                gap: 80px;
            }
        }
        .user {
            color: white;
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
        .border {
        width: 100%;
        border-bottom: 4px solid white;
        border-radius: 20px;
        position: absolute;
        top: 76px;
        padding: 0 40px;
        z-index: 2;
    }
`