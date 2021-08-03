import styled from 'styled-components'

export const Carousel = styled.div`
    overflow: hidden;
    position: relative;
`;

export const Left = styled.div`
    position: absolute;
    bottom: 46.3%;
    left: 1rem;
    font-size: 1.5rem;

    .button:hover {
        cursor: pointer;
        color: #daa520;
    }
`;

export const Right = styled.div`
    position: absolute;
    bottom: 46.3%;
    right: 1rem;
    font-size: 1.5rem;

    .button:hover {
        cursor: pointer;
        color: #daa520;
    }
`;

export const Inner = styled.div`
    white-space: nowrap;
    transition: transform 0.3s; 
`;

export const CarouselItems = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 40vw;
    background-color: #4a7475;
    color: #fff;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; 
    }
`;

export const Indicators = styled.div`
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 1px solid #000; */
    bottom: 1%;

    .span {
        margin: 0.5rem 0.15rem;
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        /* border: 1px solid #000; */
        background-color: #000;
        cursor: pointer;
    }

    .span.active {
        width: 0.5rem;
        height: 0.5rem;
        border-radius: 50%;
        background-color: #daa520;
    }
`;







