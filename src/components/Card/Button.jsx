import React, { useState } from 'react'
import styled from 'styled-components';
import GlobalStyle from '../../style';
import Modal from './Modal';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Botao = styled.button`
      min-width: 10rem;
      padding: 1rem 2rem;
      margin-bottom: 1rem;
      border-radius: 0.4rem;
      border: none;
      background: #daa520;
      color: #000;
      font-size: 1.2rem;
      font-weight: 600;
      cursor: pointer;

      &&:hover {
          color: #fff;
          box-shadow: 0 0 0.5rem #000;
      }

      @media (max-width: 768px) {
          font-size: 1.4rem;
      }
`;

const Button = ({ card }) => {

    const [showModal, setShowModal] = useState(false)
    const openModal = () => {
        setShowModal(prev => !prev)
    }
    
    return (
        <>
            <Container>
                <Botao onClick={openModal}>Saiba + </Botao>
                <Modal showModal={showModal} setShowModal={setShowModal} card={card} />
                <GlobalStyle />
            </Container>
        </>
    )
}

export default Button
