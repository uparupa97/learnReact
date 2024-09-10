import React from 'react'

const InputBox = ({putPlaceholder}) => {
  return (
    <div className="InputBox">
        <input className="input email" placeholder={putPlaceholder} id="idform"/>
    </div>
  )
}

export default InputBox