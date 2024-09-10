import React from 'react'
import CardButton from './CardButton'

const Carrd = ({imageLink, title, subText, onCardbuttonClick}) => {
    //logic 
    // const subText = "This is subtext";
    // const name = "김우빈";

    const yoohoClick = () => {
      console.log("Carrd Click!"); 
      onCardbuttonClick(); 
    }

    
    //view
  return (
    <div className="card">
        <img className="kimwoobin" src={imageLink} alt="김우빈"/>
        <h5 className="cardTitle">{title}</h5>
        <p className="cardSubText"> {subText}</p>
        <CardButton handleClick={yoohoClick} />
        {/* <CardButton onClick={handleClick}> */}
    </div>
  )
}

export default Carrd