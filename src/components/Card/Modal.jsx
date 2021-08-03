import React, {useRef} from 'react'
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    z-index: 3;
`;

const Container = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 100%;
   height: 100%;
`;

const ModalWrapper = styled.div`
    width: 90%;
    height: 80%;
    top: 0;
    left: 0;
    background: #fff;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    z-index: 10;
    border-radius: 0.8rem;
    position: relative;
`;

const ModalImg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    
    img {
        width: 35rem;
    }
`;

const ModalContent = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    line-height: 1.8;
    color: #141414;
    /* width: 100%; */

    p {
        margin-bottom: 1rem;
        text-align: center;
    }

    button {
        padding: 1rem 2rem;
        background: #141414;
        color: #fff;
        border: none;
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    bottom: 2rem;
    right: 2rem;
    width: 3.2rem;
    height: 3.2rem;
    padding: 0;
    z-index: 10;
`;

const Modal = ({ showModal, setShowModal, card }) => {
    const modalRef = useRef()

    const closeModal = () => {
        setShowModal((prev) => !prev);
      };

    const closedModal = e => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
      };

    return (
        <>
            {showModal ? (
                <Background>
                    <Container  ref={modalRef} onClick={closedModal}>
                        {card.modal.map((modal, id) => {
                            return (
                                <ModalWrapper showModal={showModal} key={id}>
                                    <CloseModalButton aria-label='Close Modal' onClick={closeModal} />

                                    <ModalImg>
                                        <img src={modal.img} alt="" />
                                    </ModalImg>
                                    <ModalContent>
                                        <p>{modal.title}</p>
                                        <p>{modal.descricao}</p>
                                        <button>join now</button>
                                    </ModalContent>

                                </ModalWrapper>
                            )
                        })};
                    </Container>
                </Background>
            ) : null}
        </>
    )
}

export default Modal
