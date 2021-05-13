import React, { Component } from 'react'
import Header from '../Header/Header'
import ImageSlider from '../Slider/ImageSlider'
import { SliderData } from '../Slider/SliderData'
import {Redirect} from 'react-router-dom'
import NewHead from '../Header/NewHead'

export default class Home extends Component {
    render() {
        console.log(localStorage.getItem("logged"))
        // if(localStorage.getItem("logged") !== "suc"){
        //     return <Redirect to="login"/>
        // }   
        return (
            <div>
                <NewHead />
                <ImageSlider slides={SliderData} />
            </div>
        )
    }
}
