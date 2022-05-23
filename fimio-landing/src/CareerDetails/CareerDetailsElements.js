import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
`
export const ContentWrapper = styled.div`
    position: relative;
    margin-top: 80px;
    margin-left: 15%;
    margin-right: 15%;
    padding-bottom: 30px;

    @media screen and (max-width: 800px) {
        margin-left: 10%;
        margin-right: 10%;
    }
`

export const BackIcon = styled.img`
    margin-top: 40px;
    margin-bottom: 40px;
    max-height: 40px;
    cursor: pointer;
    transform: rotate(90deg);

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const Title = styled.h1`
    color: #000;
    font-size: 24px;
    line-height: 36px;
    font-weight: 700;
    margin-bottom: 16px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const SubtitleWrapper = styled.div`
    display: flex;
    justify-content: start;
    margin-bottom: 30px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const FirstSubtitle = styled.p`
    font-size: 12px;
    line-height: 36px; 
    font-weight: 400;
    color: black;
    margin-bottom: 24px;
    flex-basis: 15%;

    @media screen and (max-width: 800px) {
        flex-basis: 40%;
    }
`

export const SecondSubtitle = styled.p`
    font-size: 12px;
    line-height: 36px; 
    font-weight: 400;
    color: black;
    margin-bottom: 24px;
    flex-basis: 15%;

    @media screen and (max-width: 800px) {
        flex-basis: 100%;
    }
`

export const Header = styled.p`
    font-size: 16px;
    line-height: 24px; 
    font-weight: 600;
    color: #00000;
    margin-bottom: 40px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const Paragraph = styled.p`
    font-size: 16px;
    font-weight: 400;
    line-height: 30px; 
    color: #00000;
    margin-bottom: 40px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const ParagraphList = styled.p`
    font-size: 16px;
    line-height: 30px; 
    font-weight: 400;
    color: #00000;
    padding-left: 12px;
    margin-bottom: 40px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`

export const JobLink = styled.a`
    font-size: 16px;
    font-weight: 400;
    line-height: 36px; 
    color: inherit;
    display:block;
    padding-bottom: 40px;

    margin-left: 50px;
    margin-right: 50px;

    @media screen and (max-width: 800px) {
        margin-left: 20px;
        margin-right: 20px;
    }
`
