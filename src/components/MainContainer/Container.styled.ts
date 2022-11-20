import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const ContentContainer = styled.div`
    margin-top: 80px;
    height: 100%;
    width: 100%;
    overflow-y: scroll;
    overflow-x: hidden;
    padding: 30px 40px;
`