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

export const Body = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
`;

export const H1 = styled.h2`
    color: #000;
    display: flex;
    flex-flow: wrap;
    padding: 2rem ;
    font-family: 'Cinzel', serif;
    `;

export const CardContainer = styled.div`
    box-shadow: 0 0 1rem #333;
    /* width: 30rem; */
    max-width: 25rem;
    border-radius: 1rem;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    margin: 1rem;
    background-color: #f5f5f5;

    @media (max-width: 460px) {
        max-width: 60%;
    }
  
    @media (max-width: 425px) {
        max-width: 80%;
    }

`;

export const CardTitle = styled.div`
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    padding: 1rem;
`;
export const CardImage = styled.div`
    img {
        width: 100%
    }

    &:hover {
        cursor: pointer; 
        
    }
`;
export const CardBody = styled.div`
    p {
        display: flex;
        justify-content: center;
        padding: 0.7rem;
        font-size: 1.6rem;
        font-weight: bold;
        text-transform: capitalize; 
    }
`;