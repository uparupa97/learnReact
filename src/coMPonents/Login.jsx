
import React from 'react'
import InputBox from './InputBox'
import PasswordBox from './PasswordBox';
import LoginButton from './LoginButton';
import SocialButton from './SocialButton';

const Login = () => {
  return (
    <div className="LoginEnter">
        <h1 className="LoginTitle">로그인</h1>
        <InputBox/>
        <PasswordBox/>
        <LoginButton/> 
        <p>계정이 없으신가요? <a className="linkforadmin" href="https://nid.naver.com/user2/join/agree?lang=ko_KR&realname=">가입하기</a></p>
        <p>or</p>
        <SocialButton/>
    </div>
  )
}

export default Login