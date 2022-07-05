import React from 'react'

function CatCard(props) {
  return (
    <div
      key={props.cat.id}
      className={props.setClassName(props.index)}
    >
      <img
        src={props.cat.url}
        alt="a random cat"
        className="cat-image"
      />
    </div>  
  )
}

export default CatCard