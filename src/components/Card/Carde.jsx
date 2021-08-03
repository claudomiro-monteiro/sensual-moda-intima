import React from 'react'
import Button from './Button';
import { CardData } from './CardData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from './style'

const Carde = () => {
    return (
        <Container id="adulto">
            <H1>Feminino Adulto</H1>
            <Body>
                {CardData.map((card) => {
                    return (
                        <CardContainer key={card.id}>
                            <CardTitle>
                                {card.title}
                            </CardTitle>
                            <CardImage>
                                <img src={card.img} alt="" />
                            </CardImage>
                            <CardBody>
                                <p>{card.tamanho}</p>
                                <p>{card.preco}</p>
                            </CardBody>
                            <Button card={card}/>
                        </CardContainer>
                    )
                })}
            </Body>
        </Container>
        // </div>
    )
}

export default Carde
