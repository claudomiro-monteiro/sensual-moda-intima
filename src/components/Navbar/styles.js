import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import {Link as LinkS} from 'react-scroll';

export const Nav = styled.nav`
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    background-color: #daa520;
    height: 6rem;
    margin-top: 0;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    /* @media (max-width: 768px) {
        transition: 0.8s all ease;
    }  color: #000; */
    `;

    export const NavbarContainer = styled.div`
        display: flex;
        justify-content: space-between;
        height: 6rem;
        z-index: 1;
        width: 100%;
        padding: 0 2rem;
        max-width: 150rem;

        @media (max-width: 768px) {
            /* display: flex; */
            justify-content: center;
        }
    `;

    export const NavLogo = styled(LinkR)`
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: #fff;
        cursor: pointer;
        margin-left: 2rem;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;

        img {
            height: 5rem;
            width: auto;
        }
    `;

    export const MobileMenu = styled.div`
        width: 2rem;
        height: 2rem;
        position: fixed;
        top: 2rem;
        right: 2rem;
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;

        div {
            width: 2.2rem;
            height: 0.25rem;
            background-color: ${({open}) => open ? '#ccc': '#333'};
            border-radius: 1rem;
            transform-origin: 2px;
            transition: all 0.3s linear;

            &:nth-child(1) {
                transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
            }
            &:nth-child(2) {
                transform: ${({open}) => open ? 'translateX(100%)' : 'translate(0)'};
                opacity: ${({open}) => open ? '0' : '1'};
            }
            &:nth-child(3) {
                transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
            }
        }
        @media (min-width: 769px) {
            display: none;
        }
    `;

    export const NavMenu = styled.ul`
        display: flex;
        align-items: center;
        list-style: none;
        text-align: center;
        font-size: 2rem;
        /* margin-right: 2rem; */
        text-transform: capitalize;

        @media (max-width: 768px) {
            display: none;
        }
    `;

    export const NavItem = styled.div`
        height: 6rem;
    `;

    export const NavLinks = styled(LinkS)`
        color: #000;
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
        cursor: pointer;

        &:hover{
            /* border-top
            : 3px solid #333; */
            color: #fff;
            transition: 0.3s ease;
        }

    `;



    
   