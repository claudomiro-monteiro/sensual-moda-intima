import React from 'react'
import Button from '../Card/Button';
import { CalcinhaData } from './CalcinhaData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const Calcinha = () => {
    return (
        <Container id="calcinha">
            <H1>Calcinha</H1>
            <Body>
                {CalcinhaData.map((card) => {
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
    )
}

export default Calcinha
