import React from 'react'
import Button from '../Card/Button';
import { CuecaData } from './CuecaData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const Cueca = () => {
    return (
        <Container id="cueca">
            <H1>Cueca</H1>
            <Body>
                {CuecaData.map((card) => {
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

export default Cueca
