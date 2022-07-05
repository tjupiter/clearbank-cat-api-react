import { useRef, useEffect } from 'react'
import { gsap } from 'gsap';
import './Hero.css';

// IMAGES
import runningCatGif from '../images/running-cat.gif'
import downChevron from '../images/circle-chevron-down-solid.svg'


function Hero() {
  const heroContainer = useRef(null);

  useEffect(() => {
    const element = heroContainer.current;
    gsap.fromTo(element.querySelector('.cat-gif-container'), { x: "-300%" }, { duration: 5.5, x: "300%" })
    gsap.fromTo(element.querySelector('.hero'), { x: "-180%" }, { duration: 3.5, x: "0", delay: .8 })
    gsap.fromTo(element.querySelector('.hero-h2, .hero--bottom-text'), { opacity: 0 }, { duration: 2.5, opacity: 1, delay: 2 })
    gsap.to('.chevron', { rotation: 360, duration: .7, delay: 4.5 })
  }, [])

  return (
    <div className="hero-container" ref={heroContainer}>
      <div className="cat-gif-container">
        <img
          src={runningCatGif}
          alt="running cat gif"
          className="catGif"
        />
      </div>
      <section className="hero">
        <h2 className="hero-h2">Welcome to <br className="hero--br" />
          <span className="hero--kittyland">KittyPicLand</span>
        </h2>

        <div className="hero--bottom-text">
          <p>Scroll down for cute kitty pics</p>

          <p className="hero--chevron">
            <img src={downChevron} width="25px" alt="" className="chevron" />
          </p>
        </div>
      </section>
    </div>
  )
}

export default Hero