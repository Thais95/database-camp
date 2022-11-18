import React from 'react'
import styled from 'styled-components'

export const HeaderStyled = styled.header`
    width: 100%;

    .header{
        display: flex;
        justify-content: space-between;
        padding: 0 40px;
        margin-top: 24px;
        align-items: center;

        ul{
            display: flex;
            gap: 60px;
        }

        a, p{
            font-size: 20px;
            font-weight: 500;
            color: var(--text-color);
            transition: all ease-in-out 150ms;

            &:hover{
                color: var(--light-blue);
            }
        }

        p{
            cursor: pointer;
            color: var(--light-blue);
            font-weight: 600;


            &:hover{
                color: var(--detail-color);
            };
        };
    };
`