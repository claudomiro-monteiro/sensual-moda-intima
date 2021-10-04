import React, { useState } from 'react';
import { Dropdown, DropdownMasc } from '../Dropdown/Dropdown';
import logo from '../../assets/logo_loja_02.png';
import { animateScroll as scroll } from 'react-scroll'

import { MobileMenu, Nav, NavbarContainer, NavItem, NavLogo, NavMenu, NavLinks } from './styles'

const Navbar = ({ open, handleClick }) => {

    const [dropdown, setDropdown] = useState(false);
    const [dropdownmasc, setDropdownMasc] = useState(false);
    const closeDropdown = () => { setDropdown(false) };
    const closeDropdownMasc = () => { setDropdownMasc(false) };

    const onMouseEnter = () => {
        if (window.innerWidth < 768) {
            setDropdown(false)
        } else {
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if (window.innerWidth < 768) {
            setDropdown(false)
        } else {
            setDropdown(false)
        }
    };

    const onMouseEnterM = () => {
        if (window.innerWidth < 768) {
            setDropdownMasc(false)
        } else {
            setDropdownMasc(true)
            // alert('oi')
        }
    };

    const onMouseLeaveM = () => {
        if (window.innerWidth < 768) {
            setDropdownMasc(false)
        } else {
            setDropdownMasc(false)
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop();
    }

    // function removeHash () {
    //     // let urlNohash = window.location.href.replace(/\#/g, "");
    //     window.history.replaceState({id: 5}, '', 'http://localhost:3000/contato'); 
    // }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/" onClick={scrollToTop}>
                        <img src={logo} alt="" />
                    </NavLogo>
                    <MobileMenu open={open} onClick={handleClick}>
                        <div />
                        <div />
                        <div />
                    </MobileMenu>
                    <NavMenu>
                        <NavItem onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                            <NavLinks
                                activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={70}
                                duration={400}
                                delay={100}
                            >
                                feminino
                        </NavLinks>
                            {dropdown && <Dropdown closeDropdown={closeDropdown} />}
                        </NavItem>
                        <NavItem onMouseEnter={onMouseEnterM} onMouseLeave={onMouseLeaveM}>
                            <NavLinks
                                activeClass="active"
                                to="/"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={70}
                                duration={400}
                                delay={100}
                            >
                                masculino
                            </NavLinks>
                            {dropdownmasc && <DropdownMasc closeDropdownMasc={closeDropdownMasc} />}
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="quem_somos"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={400}
                                delay={100}
                            >
                                quem somos
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="localizacao"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={400}
                                delay={100} 
                            >
                                localização
                            </NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks activeClass="active"
                                to="contato"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={400}
                                delay={100}
                            >
                                contato
                            </NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
