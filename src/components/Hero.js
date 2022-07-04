import { useRef, useEffect} from 'react'
import { gsap } from 'gsap';
// import { CSSPlugin } from 'gsap/CSSPlugin';
import './Hero.css';


import runningCatGif from '../images/running-cat.gif'
import downChevron from '../images/circle-chevron-down-solid.svg'

function Hero() {

const runningCat = useRef();
const maingBackground = useRef();
const headerText = useRef();
const paragraphText = useRef();
// gsap.registerPlugin(CSSPlugin)
useEffect(() => {
  // const timeLine = gsap.timeline()

  // timeLine.from(runningCat, {duration: 4, transform: "translateX(-200%)"})
  gsap.fromTo('.cat-gif-container', {x: "-300%"}, {duration: 5.5, x: "300%"})
  gsap.fromTo('.hero', { x: "-180%" }, { duration: 3.5, x: "0", delay: .8 })
  gsap.fromTo('.hero-h2, .hero--bottom-text', { opacity: 0 }, { duration: 2.5, opacity: 1, delay: 2
})
  gsap.to('.chevron', {rotation: 360, duration: .7, delay:4.5})
  // gsap.fromTo('.hero--bottom-text', {})

  // gsap.from('.hero-h2', {duration: 3, opacity: 0})

  
}, [])


  return (
    <div className="hero-container">
      <div ref={runningCat} className="cat-gif-container">
          <img 
            src={runningCatGif} 
            alt="running cat gif" className="catGif" />
        </div>
      <section className="hero" ref={maingBackground}>
        <h2 ref={headerText} className="hero-h2">Welcome to <br className="hero--br" />
          <span className="hero--kittyland">KittyPicLand</span>
        </h2>
        
        <div className="hero--bottom-text" ref={paragraphText}>
          <p>Scroll down for cute kitty pics</p>
  
          <p className="hero--chevron">
            <img src={downChevron} width="25px" alt="" className="chevron"/>
          </p>
        </div>
        {/* <div className="hero-background"></div> */}
      </section>
    </div>
  )
}

export default Hero