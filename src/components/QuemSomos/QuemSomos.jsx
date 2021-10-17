import React from 'react'
import quem_somos from '../../assets/feminino/fantasia/laiz_rubro.jpg'
import { Container, H1, Texto, Image, Body } from './style'

const QuemSomos = () => {
    return (
        <Container id="quem_somos">
            <H1>Quem Somos</H1>
            <Body>
                <Texto>
                    <p> Iniciamos nossas atividades no dia 17 de Agasto de 2001.
                    Na Cidade de Guaratinguetá, em Novembro de 2003 nos instalamos na
                    Cidade de Lorena, onde estamos ate os dias de hoje.
                    
                    Trabalhamos com uma grande variedade de Pijamas e Lingerie, Adulto e Infantil.
                    Fomos premiados nos anos de 2005, 2006, 2007, 2008 e 2010 com melhor atendimento
                       e qualidade nas prestações de serviços.</p>
                </Texto>
                <Image>
                    <img src={quem_somos} alt=""/>
                </Image>
            </Body>
        </Container>
    )
}

export default QuemSomos
