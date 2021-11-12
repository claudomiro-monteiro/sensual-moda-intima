import styled from 'styled-components';

export const Container = styled.div`
    background-color: rgba(252, 252, 252,0.8);
    font-size: 1.6rem;
    text-transform: capitalize;
    border-radius: 0.5rem;
    box-shadow: 0 0 1rem #000;
    margin: 2rem 5rem;
    display: block;

    @media (max-width: 768px) {
        margin: 2rem;
    }
`;

export const Body = styled.iframe`
    padding: 0 2rem 2rem 2rem;
    border: none;
    width: 100%; 
    height: 45rem; 
`;

export const H1 = styled.h2`
    color: #000;
    display: flex;
    flex-flow: wrap;
    padding: 2rem ;
`;