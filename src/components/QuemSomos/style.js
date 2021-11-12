import styled from "styled-components";

export const Container = styled.div`
    /* width: 100%; */
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
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

export const H1 = styled.h2`
    color: #000;
    display: flex;
    flex-flow: wrap;
    padding: 2rem ;
`;

export const Body = styled.div`
    width: 100%;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;

    @media (max-width: 768px) {
        justify-content: center;
    }
`;

export const Texto = styled.div`
    display: flex;
    align-items: center;
    padding: 2rem;
    width: 50%;
    
    p {
        text-align: center;
        text-transform: none;
        font-size: 1.8rem;
    }
    @media (max-width: 768px) {
        justify-content: center;
        width: 100%;
        /* font-size: 1.4rem; */
    }
`;

export const Image = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    img {
        width: 28rem;
        border-radius: 50%
    }

    @media (max-width: 768px) {
        justify-content: center;
    }
`;