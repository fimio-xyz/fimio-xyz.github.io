import styled from 'styled-components'


export const HeroContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    margin-top: 5%;

    @media screen and (max-width: 800px) {
        margin-top: 15%;
    }
`;

export const BackgroundImage = styled.div`
    background-size: 10px 10px;
    background-image:
    linear-gradient(to right, #f9f9f9 1px, transparent 1px),
    linear-gradient(to bottom, #f9f9f9 1px, transparent 1px);
    margin-left: 10%;
    margin-right: 10%;
    z-index: 1;
`

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: left;

    margin-left: 5%;
    margin-right: 5%;

    @media screen and (max-width: 800px) {
        //margin-top: 10%;
    }
`

export const BlackoutImageTop = styled.img`
    padding-bottom: 10px;
    max-height: 45vh;
`;

export const BlackoutImageBottom = styled.img`
    max-height: 35vh;
    align-self: flex-end;
`;


export const BottomText = styled.h1`
    font-weight: 700;
    font-size: 24px;
    line-height: 50px;
    color: black;
    margin-left: auto;
    padding-top: 20px;

    @media screen and (max-width: 800px) {
        padding-top: 0;
        margin-top: 10px;
    }
`

export const ImgDownArrow = styled.img`
    margin-top: 20px;
    margin-bottom: 60px;
    max-height: 40px;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        margin-bottom: 90px;
        max-height: 40px;
    }
`;
