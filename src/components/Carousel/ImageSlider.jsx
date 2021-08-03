import React, { useState, useEffect, useRef } from 'react'
import { SliderData } from './SliderData'
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import Dots from './Dots'
import { Slider, Image, ArrowLeft, ArrowRight } from './styles'


const ImageSlider = (props) => {

    const [current, setCurrent] = useState({ activeIndex: 0 });

    const { activeIndex } = current

    const autoPlayRef = useRef()

    useEffect(() => {
        autoPlayRef.current = nextSlide
    })

    useEffect(() => {
        const play = () => {
            autoPlayRef.current()
        }

        if (props.autoPlay !== null) {
            const interval = setInterval(play, props.autoPlay * 1000)
            return () => clearInterval(interval)
        }

    });

    const nextSlide = () => {
        if (activeIndex === props.slides.length - 1) {
            return setCurrent({
                ...current,
                activeIndex: 0
            })
        }

        setCurrent({
            ...current,
            activeIndex: activeIndex + 1
        })
    }

    const prevSlide = () => {
        if (activeIndex === 0) {
            return setCurrent({
                ...current,
                activeIndex: props.slides.length - 1
            })
        }

        setCurrent({
            ...current,
            activeIndex: activeIndex - 1
        })
    }

    return (
        <Slider>
            <ArrowRight>
                <IoIosArrowForward onClick={nextSlide} />
            </ArrowRight>
            <ArrowLeft>
                <IoIosArrowBack onClick={prevSlide} />
            </ArrowLeft>
            <Dots slides={props.slides} activeIndex={activeIndex} />
            <Image>
                {SliderData.map((slide, index) => {
                    return (
                        <div className={index === activeIndex ? 'slide active' : 'slide'} key={index}>
                            {index === activeIndex && (<img src={slide.image} alt="" />)}
                        </div>
                    )
                })}
            </Image>
            {/* {props.autoPlay} */}

        </Slider>
    )
}

export default ImageSlider
