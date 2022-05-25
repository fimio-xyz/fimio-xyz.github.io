import styled from 'styled-components'

export const CareerContainer = styled.div`
    min-height: 85vh;
    display: flex;
    flex-direction: column;
`

export const Header = styled.p`
    font-weight: 700;
    font-size: 24px;

    text-align: left;
    color: #000000;
    line-height: 50px;
    padding-bottom: 40px;
`

export const BackgroundImage = styled.div`
  background-size: 10px 10px;
  background-image:
  linear-gradient(to right, #f9f9f9 1px, transparent 1px),
    linear-gradient(to bottom, #f9f9f9 1px, transparent 1px);
    margin-left: 10%;
    margin-right: 10%;
`

export const BackgroundImageBehindGrid = styled.div`
    position: absolute;
    margin-left: -10px;
    z-index: -2;
  	width:100%;
  	height: 90px;
    background: ${( {light_background} ) => (light_background ? '#F2F2F2' : 'transparent' )}; 
`

export const InfoWrapper = styled.div`
    position: relative;
    padding-left: 5%;
    padding-right: 5%;

    @media screen and (max-width: 800px) {
        padding-left: 5%;
        padding-right: 5%;
    }
`

export const Subtitle = styled.p`
    max-width: 440px;
    font-size: 18px;
    line-height: 24px; 
    margin-bottom: 35px;
    color: ${({ darkText }) => (darkText ?  '#010606' : '#fff' )};

    @media screen and (max-width: 800px) {
        font-size: 32px;
    }
`

export const ImgUpArrow = styled.img`
    margin-top: 40px;
    margin-bottom: 40px;
    height: 40px;
    transform: rotate(180deg);

    @media screen and (max-width: 800px) {
        max-height: 40px;
    }
`