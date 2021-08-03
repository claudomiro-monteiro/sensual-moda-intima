import React from 'react'
import styled from 'styled-components'

const Dots = styled.span`
    padding: 0.4rem;
    margin-right: 0.4rem;
    cursor: pointer;
    border-radius: 50%;
    background: ${({active}) => active ? '#424242' : '#f5f5f5'};
`; 

const Dot = ({active}) => {
    return (
        <Dots active={active}/>
    )
}

export default Dot