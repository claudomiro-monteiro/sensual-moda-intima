import React, { useState } from 'react'
import { DropdownLink, SidebarLabel, SidebarLink } from './styles'

const SubMenu = ({ item, handleClick }) => {

    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const closeSubnav = () => {
        setSubnav(false);
        handleClick();
    };

    return (
        <>
            <SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
            </SidebarLink>
            {subnav && item.subNav.map((itens, index) => {
                return (
                    <DropdownLink key={index}
                        activeClass="active"
                        to={itens.path}
                        spy={true}
                        smooth={true}
                        hashSpy={true}
                        offset={-60}
                        duration={400}
                        delay={100}
                        onClick={closeSubnav}
                    >
                        <SidebarLabel>
                            {itens.title}
                        </SidebarLabel>
                    </DropdownLink>
                );
            })}
        </>
    );
}

export default SubMenu;
