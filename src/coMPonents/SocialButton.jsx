import React from 'react'
import GoogleLogo from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/reactfirstday/src/image/GoogleLogo.png';


const SocialButton = () => {
  return (
    <div >
    <button type="button" className="SocialButton">
        <img className="Google" alt="G" src={GoogleLogo} />
        Continue with google
    </button>
 </div>
  )
}

export default SocialButton