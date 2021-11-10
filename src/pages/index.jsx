import React, { useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
// import ImageSlider from '../components/Carousel/ImageSlider'
// import { SliderData } from '../components/Carousel/SliderData'
import Carde from '../components/Card/Carde'
import Camisola from '../components/Feminino/Carde'
import FemininoInfantil from '../components/FemininoInfantil/FemininoInfantil'
import Calcinha from '../components/Calcinha/Calcinha'
import Soutien from '../components/Soutien/Soutien'
import Gestante from '../components/Gestante/Gestante'
import Sexy from '../components/Sexy/Sexy'
import SexShop from '../components/SexShop/SexShop'
import Masculino from '../components/Masculino/Masculino'
import MasculinoInfantil from '../components/MasculinoInfantil/MasculinoInfantil'
import Cueca from '../components/Cueca/Cueca'
import QuemSomos from '../components/QuemSomos/QuemSomos'
import Localizacao from '../components/Localizacao/Localizacao'
import Contato from '../components/Contato/Contato'
import Footer from '../components/Footer/Footer'
import Carousel from '../components/Carousel/CarouselImage' 
// import Forme from '../Form'


const Home = () => {

    const [sidebar, setSidebar] = useState(false);
    const [open, setOpen] = useState(false);

    const toggle = () => setSidebar(!sidebar);
    const closeMenu = () => setOpen(!open);

    const handleClick = () => {
        toggle();
        closeMenu();
    };

    return (
        <div>
            <Sidebar sidebar={sidebar} setSidebar={setSidebar} handleClick={handleClick} />
            <Navbar open={open} handleClick={handleClick} />
            {/* <ImageSlider slides={SliderData} autoPlay={3} /> */}
            <Carousel />
            <Carde />
            <FemininoInfantil />
            <Camisola />
            <Calcinha />
            <Soutien />
            <Gestante />
            <Sexy />
            <SexShop />
            <Masculino />
            <MasculinoInfantil />
            <Cueca />
            <QuemSomos />
            <Localizacao />
            <Contato />
            <Footer />
            {/* <Forme /> */}
        </div>
    )
}

export default Home
