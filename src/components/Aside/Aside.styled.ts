import React from 'react'
import styled from 'styled-components'

export const AsideStyled = styled.aside`
    min-width: 300px;
    width: 300px;
    background-color: var(--primary-color);
    height: 100vh;
    color: #fff;
    padding: 0 20px;

 

    .logo{
        display: flex;
        align-items: center;
        gap: 8px;
        justify-content: center;
        margin-top: 24px;

        img{
            width: 48px;
        }
        h1{
            color: #ffffff
        }
    }

    hr{
        margin: 20px 0;
    }
    .container{
        display: flex;
        flex-direction: column;
        gap: 20px;

        .user{
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .content{
            display: flex;
            flex-direction: column;
            gap: 20px;
            div{
                display: flex;
                gap: 10px;
                align-items: center;
            }
            a{
                color: #ffffff;
            }
        }
    }

    h2{
        color: var(--soft-blue)
    }

    footer{
        position: absolute;
        bottom: 24px;
        left: 40px;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;
    }

`