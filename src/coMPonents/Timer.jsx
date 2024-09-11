import React, { useState, useEffect } from 'react'

const Timer = () => {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(s => s + 1);
      }, 1000);
  
      return () => clearInterval(interval); // 언마운트 시 정리(clean-up) 작업
    }, []); // 빈 배열은 마운트와 언마운트 시에만 이 효과가 실행되도록 함
  
    return <p>경과 시간: {seconds}초</p>;
  };

export default Timer

