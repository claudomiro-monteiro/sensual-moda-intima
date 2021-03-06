import React, { useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from "react-icons/gi"

import {
    Nav, SidebarRede, SidebarNav, SidebarWrap, SidebarSocial, RedeSocialUl, Rede,
    SidebarLabel, SidebarLink, Background, DropdownLink, Link, SidebarRedeLink, Hr
} from './styles'
import { RedeSocial } from './SidebarData'
import avatar from '../../assets/feminino/fantasia/laiz_rubro.jpg'

const Sidebar = ({ sidebar, setSidebar, handleClick }) => {
    const modalRef = useRef();

    const closedSidenav = (e) => {
        if (modalRef.current === e.target) {
            setSidebar(false);
            handleClick();
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
        // handleClick();
    }

    const [sidenav, setSidenav] = useState(false);
    const openSidenav = () => {
        setSidenav((prev) => !prev);
        setSidenavone(false);
    };

    const [sidenavone, setSidenavone] = useState(false);
    const openSidenavone = () => {
        setSidenavone((prev) => !prev);
        setSidenav(false);
    };

    const closedSublink = () => {
        setSidenav(false);
        setSidenavone(false);
        handleClick();
    };

    return (
        <>
            {/* {sidebar ? ( */}
            <Background sidebar={sidebar} ref={modalRef} onClick={closedSidenav}>
                <SidebarNav sidebar={sidebar}>
                    <SidebarWrap>
                        <Nav onClick={handleClick}
                            activeClass="active"
                            to="adulto"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={-60}
                            duration={400}
                            delay={100}
                        >
                            <img src={avatar} alt="" />

                        </Nav>
                        <SidebarSocial>
                            <SidebarRede>
                                <SidebarLink activeClass="active"
                                    to="/"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-60}
                                    duration={400}
                                    delay={100}
                                    onClick={scrollToTop}
                                >
                                    <AiIcons.AiFillHome />
                                    <SidebarLabel onClick={handleClick}>
                                        Inicio
                                    </SidebarLabel>
                                </SidebarLink>
                            </SidebarRede>
                            <SidebarRede onClick={openSidenav}>
                                <Link>
                                    <FaIcons.FaFemale />
                                    <SidebarLabel>
                                        Feminino
                                    </SidebarLabel>
                                </Link>
                                {sidenav ? (
                                    <SidebarSocial>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="adulto"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            // onClick={scrollToTop}
                                            >
                                                {/* <FaIcons.FaFemale /> */}
                                                <SidebarLabel onClick={closedSublink}>
                                                    Pijama Adulto
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="infantil"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Pijama Infantil
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="camisola"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Camisola
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="calcinha"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Calcinha
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="soutien"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Soutien
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="gestante"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Linha Gestante
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="sexy"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Linha Sexy
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="sexshop"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                <SidebarLabel onClick={closedSublink}>
                                                    Sexshop
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                    </SidebarSocial>
                                ) : null}
                            </SidebarRede>
                            <SidebarRede onClick={openSidenavone}>
                                <Link>
                                    <FaIcons.FaMale />
                                    <SidebarLabel>
                                        Masculino
                                    </SidebarLabel>
                                </Link>
                                {sidenavone ? (
                                    <SidebarSocial>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="masc_adulto"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            //  onClick={scrollToTop}
                                            >
                                                {/* <FaIcons.FaFemale /> */}
                                                <SidebarLabel onClick={closedSublink}>
                                                    Pijama Adulto
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="masc_infantil"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            // onClick={scrollToTop}
                                            >
                                                {/* <FaIcons.FaFemale /> */}
                                                <SidebarLabel onClick={closedSublink}>
                                                    Pijama Infantil
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                        <SidebarRede>
                                            <DropdownLink activeClass="active"
                                                to="cueca"
                                                spy={true}
                                                smooth={true}
                                                hashSpy={true}
                                                offset={-60}
                                                duration={400}
                                                delay={100}
                                            // onClick={scrollToTop}
                                            >
                                                {/* <FaIcons.FaFemale /> */}
                                                <SidebarLabel onClick={closedSublink}>
                                                    Cueca
                                                </SidebarLabel>
                                            </DropdownLink>
                                        </SidebarRede>
                                    </SidebarSocial>
                                ) : null}
                            </SidebarRede>
                            <SidebarRede>
                                <SidebarLink activeClass="active"
                                    to="quem_somos"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-60}
                                    duration={400}
                                    delay={100}
                                >
                                    <RiIcons.RiUserSharedFill />
                                    <SidebarLabel onClick={closedSublink}>
                                        Quem Somos
                                    </SidebarLabel>
                                </SidebarLink>
                            </SidebarRede>
                            <SidebarRede>
                                <SidebarLink activeClass="active"
                                    to="localizacao"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-60}
                                    duration={400}
                                    delay={100}
                                >
                                    <GiIcons.GiPositionMarker />
                                    <SidebarLabel onClick={closedSublink}>
                                        Localiza????o
                                    </SidebarLabel>
                                </SidebarLink>
                            </SidebarRede>
                            <SidebarRede>
                                <SidebarLink activeClass="active"
                                    to="contato"
                                    spy={true}
                                    smooth={true}
                                    hashSpy={true}
                                    offset={-60}
                                    duration={400}
                                    delay={100}
                                >
                                    <AiIcons.AiFillMail />
                                    <SidebarLabel onClick={closedSublink}>
                                        Contato
                                    </SidebarLabel>
                                </SidebarLink>
                            </SidebarRede>
                        </SidebarSocial>
                        <Hr />
                        <RedeSocialUl>
                            {RedeSocial.map((item, index) => {
                                return (
                                    <Rede key={index}>
                                        <div>
                                            <SidebarRedeLink href={item.path} onClick={handleClick}>
                                                {item.icon}
                                            </SidebarRedeLink>
                                        </div>
                                    </Rede>
                                )
                            })}
                        </RedeSocialUl>
                    </SidebarWrap>
                </SidebarNav>
            </Background>
            {/* ) : null} */}
        </>
    )
}

export default Sidebar
