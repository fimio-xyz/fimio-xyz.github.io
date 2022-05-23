import styled from 'styled-components'

export const BackgroundWrapper = styled.div`
    position: relative;
`

export const TextWrapper = styled.div`
    display: grid;
    padding-top: 10px;
    padding-bottom: 10px;
    cursor: pointer;
    z-index: 1;
`

export const Title = styled.h1`
    color: black;
    font-style: normal;
    font-size: 16px;
    line-height: 36px;
    font-weight: 600;
    margin-bottom: 5px;
    grid-column: 1 / span 4;
    grid-row: 1;
`

export const FirstSubtitle = styled.p`
    font-size: 12px;
    line-height: 20px; 
    font-weight: 400;
    color: black;
    margin-bottom: 10px;
    grid-column: 1;
    grid-row: 2;
`

export const SecondSubtitle = styled.p`
    font-size: 12px;
    line-height: 20px; 
    font-weight: 400;
    color: black;
    margin-bottom: 10px;
    grid-column: 2 / span 3;
    grid-row: 2;
`