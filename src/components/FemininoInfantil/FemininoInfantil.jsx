import React from 'react'
import Button from '../Card/Button';
import { FemininoInfantilData } from './FemininoInfantilData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const FemininoInfantil = () => {
    return (
        <Container id="infantil">
            <H1>Pijama Infantil</H1>
            <Body>
                {FemininoInfantilData.map((card) => {
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

export default FemininoInfantil
