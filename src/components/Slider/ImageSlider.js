import React, { useState } from 'react'
import { SliderData } from './SliderData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;
  
    const nextSlide = () => { 
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        console.log("i clicked"); 
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <>

            <div className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />

                {SliderData.map((slide, index) => {
                    return (
                        <> 
                            <div className={index === current ? 'slide ative' : 'slide'} key={index}>
                                {index === current && (<img src={slide.image} className="image" />
                                )}

                            </div>
                            
                        </>
                    )
                })}


            </div>
        </>

    )
}

export default ImageSlider
