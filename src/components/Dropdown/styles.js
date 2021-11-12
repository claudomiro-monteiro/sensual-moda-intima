import styled from 'styled-components';
import {Link as LinkS} from 'react-scroll';

export const DropdownContainer = styled.ul`
    /* width: 18rem; */
    position: absolute;
    display: flex;
    flex-flow: column nowrap;
    justify-content: flex-start;
    border-radius: 0.2rem;
    box-shadow: 0 0 0.3rem #000;

    @media (max-width: 768px) {
        width: 100%;
        position: static;
        display: flex;
        flex-flow: column nowrap;
        justify-content: flex-start;
        border-radius: 0;
        box-shadow: none;
    }
`;

export const DropdownList = styled.li`
    background: #daa520;
    cursor: pointer;

    &:hover {
        background: #333;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const DropdownLink = styled(LinkS)`
    display: block;
    width: 100%;
    height: 100%;
    color: #000;
    padding: 0.7rem 2rem;
    text-transform: capitalize;

    &:hover {
        color: #fff;
    }

    @media (max-width: 768px) {
        width: 100%;
        padding: 0.7rem 7rem;
    }
`;