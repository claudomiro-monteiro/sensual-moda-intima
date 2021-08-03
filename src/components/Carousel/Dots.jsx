import React from 'react'
import styled from 'styled-components'

import Dot from './Dot'

const Dotss = styled.div`
    position: absolute;
    bottom: 1rem;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
`;

const Dots = ({ slides, activeIndex }) => {
    return (
        <Dotss>
            {slides.map((slide, i) => (
                <Dot key={i} active={activeIndex === i} />
            ))}
        </Dotss>
    )
}
export default Dots