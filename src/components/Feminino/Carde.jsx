import React from 'react'
import Button from '../Card/Button';
import { CardData } from './CardData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const Camisola = () => {
    return (
        <Container id="camisola">
            <H1>Camisola</H1>
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
    )
}

export default Camisola
