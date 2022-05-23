import styled from 'styled-components'
import {Link} from 'react-scroll'

export const Nav = styled.nav`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: fixed;
    top: 0;
    z-index: 998;
`;

export const NavbarContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
    width: 100vw;
    padding: 0 40px;
    background: white;
    opacity: .95;
`;

export const NavLinkContainer = styled.div`
    visibility: visible;

    @media screen and (max-width: 800px) {
        visibility: hidden;
    }
`

export const NavLogoWrap = styled(Link)`
    cursor: pointer;
`

export const MobileIcon = styled.img`
    position: absolute;
    height: 50px;
    left: 30px;
    top: 16px;
`

export const NavItem = styled(Link)`
    font-weight: 400;
    font-size: 18px;
    line-height: 60px;
    color: #000000;
    margin-left: 50px;
    cursor: pointer;
    align-self: flex-end;

`

export const NavHamburger = styled.div`
    visibility: hidden;
    max-width: 50px;

    transition: 0.3s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'rotate(45deg)' : 'rotate(0deg)' )};

    @media screen and (max-width: 800px) {
        visibility: visible;
        align-self: center;
        cursor: pointer;
    }
`