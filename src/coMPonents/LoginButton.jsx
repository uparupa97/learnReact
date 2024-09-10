import React from 'react'

const LoginButton = ({buttonClass, buttonName}) => {

  return (
    <div >
       <button type="button" className={buttonClass}>{buttonName}</button>
    </div>
  )
}

export default LoginButton

