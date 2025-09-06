import React, { Component } from 'react';
import Lottie from 'react-lottie';
import animationData from '../assets/error404.json'
class AnimationPage extends Component {
    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            animationData: animationData,
            renderer: 'svg'
        }
        return (
            <>
               <Lottie
                options={defaultOptions}
                height={600}
                width={600}
               />
           </>
        )
    };  
}
export default AnimationPage;