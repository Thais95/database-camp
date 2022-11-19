import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`


export const InnerContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 49.6%;
    transform: translate(-50%, -50%);
    width: 525px;
    height: 800px;
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    background-color: #ffffff;
    border-radius: 12px;
    
    h1 {
        font-size: 2.2rem;
        font-weight: 700;
        user-select: none;
        margin: 25px 0;
        color: var(--light-blue);
    }



    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        align-items: center;
        justify-content: space-around;
        height: 100%;
        color: var(--detail-secondary-color);


        div {
            display: flex;
            width: 100%;
            justify-content: space-between;
            align-items: center;
            gap: 30px;

            label {
                font-size: 1.25rem;
                font-weight: 600;
                margin-bottom: 5px;
                padding-left: 15px;
                user-select: none;
                text-align: justify;
                color: var(--light-blue);
            }

            input, select {
                background-color: #ffffff;
                width: 300px;
                height: 54px;
                border-radius: 8px;
                font-size: 1.25rem;
                font-weight: 500;
                padding: 0 20px;
                border:1px solid rgb(118, 118, 118, 0.2);
                box-shadow: 0px 2px 6px rgba(19, 18, 66, 0.07);
                transition: 0.5s;
                outline: none;
                color: var(--text-color);

                &:focus {
                    border-color: var(--soft-blue);
                    transition: all ease-in-out 200ms;
                }
            }
        }
        input[type=submit] {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 380px;
                height: 45px;
                border-radius: 10px;
                font-size: 1.1rem;
                font-weight: 600;
                margin: 30px 0;
                border: none;
                cursor: pointer;
                background-color: var(--light-blue);
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