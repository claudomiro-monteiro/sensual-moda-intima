import React from 'react';
import { MenuItemsFem, MenuItemsMasc } from './MenuItems';
// import * as Scroll from 'react-scroll';
// import { Link } from 'react-scroll'

import { DropdownContainer, DropdownLink, DropdownList } from './styles'

export const Dropdown = ({ closeDropdown }) => {

    return (
        <div>
            <DropdownContainer>
                {MenuItemsFem.map((item, id) => {
                    return (
                        <DropdownList key={id}>
                            <DropdownLink
                                activeClass="active"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={400}
                                delay={100}
                                className={item.cName}
                                to={item.path}
                                onClick={closeDropdown}>
                                {item.title}
                            </DropdownLink>
                        </DropdownList>
                    );
                })}
            </DropdownContainer>
        </div>
    )
}

export const DropdownMasc = ({ closeDropdownMasc }) => {
    return (
        <div>
            <DropdownContainer>
                {MenuItemsMasc.map((item, index) => {
                    return (
                        <DropdownList key={index}>
                            <DropdownLink activeClass="active"
                                spy={true}
                                smooth={true}
                                hashSpy={true}
                                offset={-70}
                                duration={400}
                                delay={100}
                                className={item.cName}
                                to={item.path}
                                onClick={closeDropdownMasc}
                            >
                                {item.title}
                            </DropdownLink>
                        </DropdownList>
                    );
                })}
            </DropdownContainer>
        </div>
    )
}

