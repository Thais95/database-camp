import styled from 'styled-components'

export const AsideStyled = styled.aside`
    min-width: 300px;
    width: 300px;
    background-color: var(--primary-color);
    height: 100vh;
    color: #fff;
    padding: 0 20px;
    position: relative;
    .logo {
        height: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        .logoLink {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 8px;
        }
        img {
            width: 40px;
        }
        h1 {
            font-size: 1.4rem;
            font-weight: 600;
            color: #fff;
        }
    }
    hr {
        color: white;
        margin-top: -4px;
    }
    .container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        .user {
            height: 50px;
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 10px;
            margin-top: 30px;
            user-select: none;
            p {
                text-transform: capitalize;
                font-size: 1.2rem;
                line-height: 1rem;
                font-weight: 600;
                color: var(--soft-blue);
            }
        }
        .content {
            display: flex;
            flex-direction: column;
            gap: 30px;
            a {
                color: #fff;
                display: flex;
                align-items: center;
                font-weight: 600;
                font-size: 1.1rem;
                gap: 10px;
                &:hover {
                    color: var(--light-blue);
                }
            }
        }
    }
    footer {
        position: absolute;
        bottom: 24px;
        left: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
        }
`