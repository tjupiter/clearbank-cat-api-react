import React, { useEffect, useState, useRef } from 'react';
import './Main.css';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CatCard from './CatCard';

export default function Main() {

  const [catData, setCatData] = useState([]);
  const [isDataLoading, setIsDataLoading] = useState(true);
  const mainContainer = useRef(null);

  
  // ===================
  // FETCH DATA FROM API
  // ===================
  useEffect(() => {
    // https://docs.thecatapi.com/authentication
    const fetchCatData = async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=50', {
        headers: {
          'X-API-KEY': '24d14f66-0979-47e9-bbbb-a813b8223ae4'
        }
      }, [])
      const result = await res.json()
      setCatData(result);
      setIsDataLoading(false);
    }
    fetchCatData()
    // console.log(catData)
  }, [])


  // =============================
  // GSAP animation for cat images
  // =============================
  useEffect(() => {
    
    gsap.config({
      nullTargetWarn: false //disables console warning message
    })

    const element = mainContainer.current

    gsap.set(element.querySelectorAll('.cat-image'), {opacity: 0, autoAlpha: 0})
    gsap.registerPlugin(ScrollTrigger); 
      ScrollTrigger.batch(element.querySelectorAll('.cat-image'), {
        interval: 0.1,
        batchMax: 3,
        onEnter: batch => gsap.to(batch, { opacity: 1, autoAlpha: 1, stagger: 0.15, overwrite: true }),
        onLeave: batch => gsap.set(batch, { opacity: 0, autoAlpha: 0, overwrite: true }),
        onEnterBack: batch => gsap.to(batch, { autoAlpha: 1, stagger: 0.15, overwrite: true }),
        onLeaveBack: batch => gsap.set(batch, { autoAlpha: 0, overwrite: true }),
        markers: false,
        start: "top 85%",
        end: "bottom 40%"
      });
      ScrollTrigger.refresh()

  }, [catData])

  // ====================
  // ADD GRID CLASS NAMES
  // ====================
  const setClassName = (index) => {
    if (index % 4 === 0 && index % 6 !== 0) {
      return "cat-container vertical"
    } else if (index % 5 === 0) {
      return "cat-container horizontal"
    } else if (index % 6 === 0) {
      return "cat-container bigbox"
    } else {
      return "cat-container"
    }
  }

  return (
    <>
      {isDataLoading && 
        <div className="loading-container">Loading cute kitty pics...</div>
      }

      <section className="main-cat-container" ref={mainContainer}>
        {catData.map((cat, index) => 
          <CatCard 
            key={cat.id} 
            cat={cat} 
            index={index} 
            setClassName={setClassName}/>
          )}
      </section>
    </>
  )
}