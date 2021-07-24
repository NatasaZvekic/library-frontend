import React, { Component } from 'react'
import ImageSlider from '../Slider/ImageSlider'
import { SliderData } from '../Slider/SliderData'
import NewHead from '../Header/HeaderTwo'

export default class Home extends Component {
    render() {
      
        return (
            <div>
                <NewHead />
                <ImageSlider slides={SliderData} />
            </div>
        )
    }
}
