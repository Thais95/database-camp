import styled from 'styled-components';

export const Container = styled.div`
    min-height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 50%;
    overflow: hidden;
    background-color: var(--primary-color);
    img {
        width: 90%;
        height: 90%;
        object-fit: contain;
        -webkit-user-drag: none;
    }
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    gap: 20px;
    h1 {
        font-size: 1.45rem;
        font-weight: 700;
        user-select: none;
        margin-bottom: 28px;
        color: var(--primary-color);
        @media screen and (max-width: 1400px) {
            margin-bottom: 16px;
        }
    }
    h2 {
        font-size: 3.6rem;
        font-weight: 700;
        user-select: none;
        margin-bottom: 74px;
        color: var(--detail-color);
        font-family: 'Lora', serif;
        @media screen and (max-width: 1400px) {
            margin-bottom: 32px;
        }
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 42px;
        align-items: center;
        justify-content: center;
        color: var(--detail-secondary-color);
        div {
            display: flex;
            flex-direction: column;
            position: relative;
            label {
                font-size: 1rem;
                font-weight: 500;
                margin-bottom: 5px;
                padding-left: 15px;
                user-select: none;
            }
            span {
                bottom: -30px;
                margin-left: 15px;
                font-size: 0.95rem;
                font-weight: 700;
                position: absolute;
                color: #ff0000;
                user-select: none;
            }
            input[type=text], input[type=password] {
                background-color: #fff;
                width: 380px;
                height: 45px;
                border-radius: 10px;
                font-size: 1.1rem;
                padding: 22px 15px;
                border: 2px solid rgba(111, 196, 201, 0.3);
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
                border-radius: 10px;
                transition: 0.5s;
                &:focus {
                    box-shadow: 0px 0px 10px rgba(111, 196, 201, 0.50);
                    border-color: var(--soft-blue);
                    transition: 0.8s;
                }
            }
            input[type=submit] {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 45px;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: 600;
                margin-top: 20px;
                border: none;
                cursor: pointer;
                background-color: var(--primary-blue);
                border: 1px solid #09455D;
                box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.05);
                border-radius: 10px;
                color: white;
                transition: 0.5s;
                @media screen and (max-width: 1400px) {
                    margin-top: 16px;
                }
                &:hover {
                    transition: 0.5s;
                    background-color: var(--light-blue);
                    border: 2px solid var(--light-blue);
                    box-shadow: 0px 0px 10px rgba(111, 196, 201, 0.80);
                }
            }
        }
    }
    .signup {
        font-size: 1rem;
        font-weight: 500;
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        user-select: none;
        text-align: center;
        a {
            color: var(--detail-color);
            font-weight: 600;
            transition: 0.5s;
            &:hover {
                transition: 0.5s;
                color: var(--light-blue);
            }
        }
    }
`