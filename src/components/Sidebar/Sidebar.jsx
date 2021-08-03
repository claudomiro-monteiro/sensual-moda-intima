import React, { useRef, useState } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from "react-icons/gi"

import {
    Nav, SidebarRede, SidebarNav, SidebarWrap, SidebarSocial,
    SidebarLabel, SidebarLink, Background, DropdownLink, Link
} from './styles'
import avatar from '../../assets/img-02.jpg'

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
                        <Nav onClick={handleClick}>
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
                                    delay={100} onClick={scrollToTop}>
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
                                        Localização
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
                        {/* <SidebarSocial>
                                {RedeSocial.map((item, index) => {
                                    return (
                                        <SidebarRede key={index}>
                                            <div>
                                                <SidebarRedeLink to={item.path} onClick={handleClick}>
                                                    {item.icon}
                                                </SidebarRedeLink>
                                            </div>
                                        </SidebarRede>
                                    )
                                })}
                            </SidebarSocial> */}
                    </SidebarWrap>
                </SidebarNav>
            </Background>
            {/* ) : null} */}
        </>
    )
}

export default Sidebar
