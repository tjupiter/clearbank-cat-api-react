import React from 'react'
import './Hero.css'

import downChevron from '../images/circle-chevron-down-solid.svg'

function Hero() {
  return (
    <section className = "hero" >
            <h2>Welcome to <br className="hero--br" />
                <span className="hero--kittyland">KittyPicLand</span>
            </h2>
            <div className="hero--bottom-text">
                <p>Scroll down for cute kitty pics</p>
                
                <p className="hero--chevron">
                    <img src={downChevron} width="35px" alt=""/>
                </p>
            </div>
    </section>
  )
}

export default Hero