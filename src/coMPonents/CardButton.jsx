import React from 'react'

const CardButton = ({handleClick}) => {

  

  const firstClick =  () => {
    console.log("cardbutton -> click!!"); 
    handleClick(); 
  }

//view
  return (
    <div >
        {/* <button type="button" className="cardButton" onClick={handleButton}>Go somewhere</button> */}

       <button type="button" className="cardButton" onClick={firstClick}>Go somewhere</button>
    </div>
  )
}

export default CardButton