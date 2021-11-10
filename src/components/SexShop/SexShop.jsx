import React from 'react'
import Button from '../Card/Button';
import { SexShopData } from './SexShopData';
import { Container, Body, H1, CardContainer, CardTitle, CardImage, CardBody } from '../Card/style'

const SexShop = () => {
    return (
        <Container id="sexshop">
            <H1>SexShop</H1>
            <Body>
                {SexShopData.map((card) => {
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

export default SexShop
