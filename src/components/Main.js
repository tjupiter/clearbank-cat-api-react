import React, { useEffect } from 'react'
import './Main.css'

export default function Main() {

  const [catData, setCatData] = React.useState([]);

  useEffect(() => {

    // https://docs.thecatapi.com/authentication
    const fetchCatData = async () => {
      console.log("fetchCatData is running")
      const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=50', {
        headers: {
          'X-API-KEY': '24d14f66-0979-47e9-bbbb-a813b8223ae4'
        }
      }, [])
      const result = await res.json()
      console.log(result)
      setCatData(result)
      // console.log(catData)
    }
    fetchCatData()
    
  }, [])

  const className = (i) => {
  
    
    if (i % 4 === 0 && i % 6 !== 0) {
      console.log(i)
      return "cat-container vertical"
    } else if (i % 5 === 0) {
      console.log(i)
      return "cat-container horizontal"
    } else if (i % 6 === 0) {
      console.log(i)
      return "cat-container bigbox"
    }
  }



  return (
    
  
    <section className="main-cat-container">
      {catData.map((cat, index) => 
        <div 
          key={cat.id}
          className={className(index)}
          >
          <img 
            src={cat.url}
            alt="cat"
            className="cat-image"
            />
        </div>  
        )}


    </section>
  )
}