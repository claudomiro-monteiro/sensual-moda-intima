import React from 'react'
import { Link } from "react-router-dom";
import {FaFacebook,FaInstagram,FaPhone, FaMailBulk, FaWhatsapp} from 'react-icons/fa'

import './style'
import { Adress, Footer, RedeSocial } from './style'

const footer = () => {
    return (
        <Footer>
            <RedeSocial>
                {/* <div className="App"> */}
                    <div className="link">
                        {/* <Router> */}
                            <h2>Pijamas</h2>
                            <Link to="/" className="social">Pijama Feminino</Link>
                            <Link to="/" className="social">Pijama Masculino</Link>
                            <Link to="/" className="social">Pijama Infantil</Link>
                        {/* </Router> */}
                    </div>
                    <div className="link">
                        {/* <Router> */}
                            <h2>Contato</h2>
                            <Link to="/" className="social">
                                <FaPhone className="space" size="3rem" />
                                <div className="hide">(12) 3157-6205</div>
                            </Link>
                            <Link to="/" className="social">
                                <FaWhatsapp className="space" size="3rem" />
                                <div className="hide">(12) 98838-3481</div>
                            </Link>
                            <Link to="/" className="social">
                                <FaMailBulk className="space" size="3rem" />
                                <div className="hide">sensualmdintima@gmail.com</div>
                            </Link>
                        {/* </Router> */}
                    </div>
                    <div className="link">
                        {/* <Router> */}
                            <h2>Rede Social</h2>
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
        // <Footer>
        //     {/* <h3>Rede Sociais</h3> */}
        //     <RedeSocial >
        //         <div className="center"><FaIcons.FaWhatsapp className="rede"/><div className="hide">(12) 98838-3481/(12) 98811-8035</div></div>
        //         <div className="center"><FaIcons.FaFacebook className="rede"/><div className="hide">/sensualmodaintima</div></div>
        //         <div className="center"><FaIcons.FaInstagram className="rede"/><div className="hide">@sensual.moda.intima</div></div>
        //         <div className="center"><FaIcons.FaPhone className="rede"/><div className="hide">(12) 3157-6205</div></div>
        //     </RedeSocial>
        //     <p>Rua: Comendador Custódio Vieira, 15</p> 
        //     <p>Centro - Lorena - SP</p>
        //     <p>Cep: 12600-030</p>
        //     <p>Todos os direitos reservados | Sensual Moda Intima | 2021</p>
        // </Footer>
    )
}

export default footer
