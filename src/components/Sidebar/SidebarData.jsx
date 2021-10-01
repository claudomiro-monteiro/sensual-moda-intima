import React from 'react'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as FaIcons from 'react-icons/fa'
import * as GiIcons from "react-icons/gi";

export const Begin = [
    {
        title: 'inicio',
        path: '/',
        icon: <AiIcons.AiFillHome />
    }
]

export const SidebarData = [
    {
        title: 'feminino',
        path: '/',
        icon: <FaIcons.FaFemale />,
        subNav: [
            {
                title: 'adulto',
                path: 'adulto'
            },
            {
                title: 'infantil',
                path: 'infantil'
            },
            {
                title: 'camisola',
                path: 'camisola'
            },
            {
                title: 'calcinha',
                path: 'calcinha'
            },
            {
                title: 'soutien',
                path: 'soutien'
            },
            {
                title: 'linha gestante',
                path: 'gestante',
            },
            {
                title: 'linha sexy',
                path: 'sexy',
            },
            {
                title: 'sexShop',
                path: 'sexshop',
            }
        ]
    },
    {
        title: 'masculino',
        path: '/',
        icon: <FaIcons.FaMale />,
        subNav: [
            {
                title: 'adulto',
                path: 'masc_adulto'
            },
            {
                title: 'infantil',
                path: 'masc_infantil'
            },
            {
                title: 'cueca',
                path: 'cueca'
            }
        ]
    }
    
];

export const Pkna = [
    {
        title: 'quem somos',
        path: 'quem_somos',
        icon: <RiIcons.RiUserSharedFill />
    },
    {
        title: 'localização',
        path: 'localizacao',
        icon: <GiIcons.GiPositionMarker />
    },
    {
        title: 'contato',
        path: 'contato',
        icon: <AiIcons.AiFillMail />,
    }
]

export const RedeSocial = [
    {
        icon: <FaIcons.FaWhatsapp />,
        path: 'https://wa.me/5512988383481'
    },
    {
        icon: <FaIcons.FaFacebook />,
        path: 'https://www.facebook.com/Sensual-Moda-Intima-708833402783149'
    },
    {
        icon: <FaIcons.FaInstagram />,
        path: 'https://www.instagram.com/sensual.moda.intima/'
    }
]