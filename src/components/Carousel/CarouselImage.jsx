// import "./styles.css";
import React from 'react'

import Carousel, { CarouselItem } from "./Carousel";

import img01 from '../../assets/slide/01.jpg'
import img02 from '../../assets/slide/02.jpg'
import img03 from '../../assets/slide/03.jpg'
import img04 from '../../assets/slide/04.jpg'
import img05 from '../../assets/slide/05.jpg'

const CarouselImage = () => {
    return (
        <div>
            <Carousel>
                <CarouselItem>
                    <img src={img01} alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img02} alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img03} alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img04} alt="" />
                </CarouselItem>
                <CarouselItem>
                    <img src={img05} alt="" />
                </CarouselItem>
            </Carousel>
        </div>
    )
}

export default CarouselImage
