import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

export const BannerContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 90%;
    overflow: hidden;
    margin-left: 100px;
    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        -webkit-user-drag: none;
    }
`

export const LoginContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 50%;
    height: 100%;
    gap: 20px;
    h1 {
        font-size: 2.2rem;
        font-weight: 600;
        user-select: none;
        margin-bottom: 50px;
        color: var(--primary-blue);
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: center;
        color: var(--detail-secondary-color);
        div {
            display: flex;
            flex-direction: column;
            label {
                font-size: 1rem;
                margin-bottom: 5px;
                padding-left: 10px;
            }
            input[type=text], input[type=password] {
                width: 380px;
                height: 35px;
                border-radius: 10px;
                font-size: 1.1rem;
                padding: 22px;
                border: 1px solid #eff0f7;
                box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
                transition: 0.5s;
                &:focus {
                    box-shadow: 0px 0px 10px rgba(255, 89, 208, 0.28);
                    border-color: rgba(255, 89, 249, 0.224);
                    transition: 0.5s;
                    transition: 0.5s;
                }
            }
            input[type=submit] {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 200px;
                height: 45px;
                border-radius: 10px;
                font-size: 1.2rem;
                font-weight: 600;
                margin-top: 30px;
                border: none;
                cursor: pointer;
                background-color: var(--primary-pink);
                box-shadow: 0px 0px 10px rgba(255, 89, 208, 0.28);
                color: white;
                transition: 0.5s;
                &:hover {
                    transition: 0.5s;
                    background-color: var(--secondary-pink);
                    color: var(--primary-text-color);
                    border: 2px solid var(--primary-pink);
                }
            }
        }
    }
    .signup {
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 8px;
        user-select: none;
        text-align: center;
        a {
            color: var(--primary-blue);
            font-weight: 600;
            transition: 0.4s;
            &:hover {
                transition: 0.4s;
                color: var(--primary-pink);
            }
        }
    }
`