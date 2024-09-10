import React from 'react'
import GoogleLogo from '/Users/mac/Desktop/ project-visualstudiocode/LDuparupa97/reactfirstday/src/image/GoogleLogo.png';


const SocialButton = () => {
  return (
    <div >
    <button type="button" className="SocialButton">
        <div className="alignitems">
        <img className="Google" alt="G" src={GoogleLogo} />
        <span className="Continue">Continue with google</span>
        </div>
    </button>
 </div>
  )
}

export default SocialButton