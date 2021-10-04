import React from 'react'
// import { Link } from "react-router-dom";
// import * as Scroll from 'react-scroll';
import { Link } from 'react-scroll'
import { FaFacebook, FaInstagram, FaPhone, FaMailBulk, FaWhatsapp } from 'react-icons/fa'

import './style'
import { Adress, Footer, RedeSocial } from './style'

const footer = () => {

    return (
        <Footer>
            <RedeSocial>
                {/* <div className="App"> */}
                <div className="link">
                    {/* <Router> */}
                    <h3>Pijamas</h3>
                    <Link className="social"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-70}
                        duration={400}
                        delay={100}
                        to="adulto"
                    >
                        Pijama Feminino
                    </Link>
                    <Link className="social"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-70}
                        duration={400}
                        delay={100}
                        to="masc_adulto"
                    >
                        Pijama Masculino
                    </Link>
                    <Link className="social"
                        activeClass="active"
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-70}
                        duration={400}
                        delay={100}
                        to="infantil"
                    >
                        Pijama Infantil
                    </Link>
                    {/* </Router> */}
                </div>
                <div className="link">
                    {/* <Router> */}
                    <h3>Contato</h3>
                    <Link to="/" className="social">
                        <FaPhone className="space" size="3rem" />
                        <div className="hide">(12) 3157-6205</div>
                    </Link>
                    <a href="https://wa.me/5512988383481" className="social">
                        <FaWhatsapp className="space" size="3rem" />
                        <div className="hide">(12) 98838-3481</div>
                    </a>
                    <Link to="/" className="social">
                        <FaMailBulk className="space" size="3rem" />
                        <div className="hide">sensualmdintima@gmail.com</div>
                    </Link>
                    {/* </Router> */}
                </div>
                <div className="link">
                    {/* <Router> */}
                    <h3>Rede Social</h3>
                    <a href="https://www.facebook.com/Sensual-Moda-Intima-708833402783149" className="social">
                        <FaFacebook size="3rem" />
                    </a>
                    <a href="https://www.instagram.com/sensual.moda.intima/" className="social">
                        <FaInstagram size="3rem" />
                    </a>
                    {/* </Router> */}
                </div>
                {/* </div> */}
            </RedeSocial>
            <Adress>
                <span>Rua: Comendador Custódio Vieira, 15</span>
                <span>Centro - Lorena - SP</span>
                <span>CEP: 12600-030</span>
                <span>Todos Direitos Reservados | Sensual Moda Intima | 2021</span>
            </Adress>
        </Footer>
    )
}

export default footer
