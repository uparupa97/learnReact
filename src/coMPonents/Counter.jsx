import React, {useState} from 'react'
import NumberInput from './NumberInput';

const Counter = () => {

  let [numberText, setNumberText] = useState(0);
    
  // 버튼 클릭 시 텍스트 변경하는 함수
 const increaseClick = () => {
    if (numberText >= 15 ) {
        alert('더이상 올라가지 않습니다');
    } else {
        // setNumberText(numberText +1 )
        // setNumberText((prev) => prev - 1 ); 
        // 이게 원래 ((prev) => { return prev -1 }; 이거였던 것임
        setNumberText(numberText = numberText + 1) ;
    console.log(numberText);
 }};

  const decreaseClick = () => {
    if (numberText <= 0 ) {
        alert('더이상 내려가지 않습니다');
    } else {
        setNumberText(numberText = numberText - 1) ; }
  };

  const handleInputSubmit = (inputValue) => {
    const number = parseInt(inputValue, 10); // 문자열을 숫자로 변환
    if (!isNaN(number) && 0 <= number <= 15) {
      setNumberText(prev => prev + number); // 입력된 숫자를 더함
    } else {
      alert("0~15 사이 유효한 숫자를 입력하세요.");
    }
  };



  return (
    <div style={{textAlign: 'center', backgroundColor: '#e0ffff', width: '700px', height: '200px', padding : '50px' }}>
     <h1 className="countNumber"> {numberText} </h1>
     <button type="button" className="counterButton" onClick={increaseClick}> + </button>
     <button type="button" className="counterButton" onClick={decreaseClick}> - </button>
     <NumberInput onSubmit={handleInputSubmit} />
   </div>
  )
}

export default Counter