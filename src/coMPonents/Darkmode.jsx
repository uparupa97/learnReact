import React from 'react'

const Darkmode = ({isDarkMode, darkClick}) => {

    const darkclickButton = () => {
        darkClick()
    }


  return (
    <div>
        <button type="button" onClick={darkclickButton}>버튼 : {isDarkMode ? "다크모드" : "라이트모드"}</button>
    </div>
  )
}

export default Darkmode