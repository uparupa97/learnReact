import React, { useState, useEffect } from 'react';

const Clock = () => {
  // 현재 시간을 상태로 저장
  const [time, setTime] = useState(new Date());

  // setInterval을 사용해 1초마다 상태 업데이트
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // 컴포넌트가 언마운트될 때 interval 정리
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>현재 시간: {time.toLocaleTimeString()}</h2>
    </div>
  );
};

export default Clock;
