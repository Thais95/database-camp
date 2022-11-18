import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100% - 300px);
    height: 100%;
    h1 {
        font-size: 2.2rem;
        font-weight: 600;
        user-select: none;
        margin-bottom: 50px;
        color: var(--soft-blue);
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
                padding-left: 15px;
                user-select: none;
            }
            input[type=text], input[type=password] {
                background-color: var(--dark-blue);
                width: 380px;
                height: 35px;
                border-radius: 10px;
                font-size: 1.1rem;
                padding: 22px 15px;
                border: 2px solid var(--primary-blue);
                box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
                transition: 0.5s;
                &:focus {
                    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
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
                margin-top: 30px;
                border: none;
                cursor: pointer;
                background-color: var(--primary-blue);
                box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
                color: white;
                transition: 0.5s;
                &:hover {
                    transition: 0.5s;
                    border: 2px solid var(--primary-blue);
                    box-shadow: 0px 0px 10px rgb(111, 196, 201, 0.50);
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
            color: var(--detail-color);
            font-weight: 600;
            transition: 0.4s;
            &:hover {
                transition: 0.4s;
                color: var(--primary-blue);
            }
        }
    }
`

export const ContentContainer = styled.div`
    margin-top: 80px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 30px 40px;
`