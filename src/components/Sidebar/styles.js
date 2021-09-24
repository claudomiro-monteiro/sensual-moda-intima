import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';
import {Link as LinkR} from 'react-router-dom';

export const Nav = styled.div`
    width: 100%;
    /* height: 15rem; */
    /* border-radius: 50%; */
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 15rem;
        height: 15rem;
        border-radius: 50%;
        padding: 1rem;
    }
`;

export const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    top: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    position: fixed;
    /* top: 0; */
    z-index: 3;
`;

export const SidebarNav = styled.nav`
    background: #daa520;
    width: 30rem;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    right: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
    transition: 500ms;
    z-index: 3;
    overflow-y: auto;
`;

export const SidebarWrap = styled.div`
    margin-top: 6rem;
    width: 100%;
`;

export const Link = styled.div`
    display: flex;
    color: #000; 
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    list-style: none;
    height: 5rem;
    text-decoration: none;
    font-size: 2.5rem;
    text-transform: capitalize;

    &:hover {
        background: #000;
        border-left: 0.3rem solid #fff;
        color: #ccc;
    }
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    color: #000; 
    justify-content: flex-start;
    align-items: center;
    padding: 2rem;
    list-style: none;
    height: 5rem;
    text-decoration: none;
    font-size: 2.5rem;
    text-transform: capitalize;

    &:hover {
        background: #000;
        border-left: 0.3rem solid #fff;
        color: #ccc;
    }
`;

export const Hr = styled.hr`
  margin-top: 2rem;
  border: 0;
  border: 1px solid #000;
  width: 100%;
`;

export const SidebarSocial = styled.ul`
    display: flex;
    flex-flow: column;
    width: 100%;
`;

export const SidebarRede = styled.li`
    width: 100%;
    list-style: none;
`;

export const SidebarRedeLink = styled(LinkR)`
    text-decoration: none;
    font-size: 4rem;
    text-transform: capitalize;
    color: #000;

    &:hover {
        border-left: 0.3rem solid #fff;
        color: #fff;
        border-left: none;
    }
`;

 export const SidebarLabel = styled.span`
    margin-left: 2rem;
    align-items: center;
 `;

 export const DropdownLink = styled(LinkS)`
    background: #daa500;
    height: 5rem;
    padding-left: 6rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #000;
    font-size: 2.5rem;
    text-transform: capitalize;

    &:hover {
        background: #000;
        border-left: 0.3rem solid #fff;
        color: #ccc;
    }
 `;

export const RedeSocialUl = styled.ul`
display: flex;
flex-flow: row wrap;
justify-content: space-around;
align-items: center;
margin-top: 3rem;
`;

export const Rede = styled.li`
display: flex;
cursor: pointer;
`;


