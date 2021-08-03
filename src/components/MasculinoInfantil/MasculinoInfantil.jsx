import React from 'react'
import Button from '../Card/Button';
import { MasculinoInfantilData } from './MasculinoInfantilData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const MasculinoInfantil = () => {
    return (
        <Container id="masc_infantil">
            <H1>Masculino Infantil</H1>
            <Body>
                {MasculinoInfantilData.map((card) => {
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

export default MasculinoInfantil
