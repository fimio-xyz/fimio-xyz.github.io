import styled from 'styled-components'
import {Link} from 'react-scroll'

export const SidebarContainer = styled.aside`
    overscroll-behavior-y: contain;
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    top: 80px;
    left: 0;
    transition: 0.5s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%' )};
    z-index: ${({ isOpen }) => (isOpen ? '999' : '-5' )};
    background: white;
`

export const BackgroundImage = styled.div`
  //background-size: 10px 10px;
  //background-image:
  //linear-gradient(to right, #f9f9f9 1px, transparent 1px),
  //linear-gradient(to bottom, #f9f9f9 1px, transparent 1px);
  margin-left: 10%;
    margin-right: 10%;
    height: 60%;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    cursor: pointer;
    outline: none;
`

export const SidebarItem = styled(Link)`
    font-weight: 700;
    font-size: 24px;
    line-height: 50px;
    color: black;
    cursor: pointer;
    align-self: flex-end;
`

export const SidebarWrapper = styled.div`
    margin-top: 80px;
    margin-right: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    align-content: flex-start;
`