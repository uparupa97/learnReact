import React from 'react'
import CardButton from './CardButton'

const Carrd = () => {
    //logic 
    const subText = "This is subtext";
    const name = "김우빈";

    //view
  return (
    <div className="card">
        <img className="kimwoobin" src="https://image.ajunews.com/content/image/2022/08/03/20220803152153486308.jpg" alt="김우빈"/>
        <h5 className="cardTitle">{name}</h5>
        <p className="cardSubText"> {subText}</p>
        <CardButton/>
    </div>
  )
}

export default Carrd