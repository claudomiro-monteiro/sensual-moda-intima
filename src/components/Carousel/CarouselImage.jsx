// import "./styles.css";
import React from 'react'

import Carousel, { CarouselItem } from "./Carousel";

import img01 from '../../assets/slide/slide_02.png'
import img02 from '../../assets/slide/slide_03.png'
import img03 from '../../assets/slide/slide_04.png'
import img04 from '../../assets/slide/slide_05.png'
import img05 from '../../assets/slide/slide_06.png'

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
