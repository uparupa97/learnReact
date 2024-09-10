import React, {useState} from 'react'

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


  return (
    <div style={{textAlign: 'center', backgroundColor: '#e0ffff', width: '700px', height: '200px', padding : '50px' }}>
     <h1 className="countNumber"> {numberText} </h1>
     <button type="button" className="counterButton" onClick={increaseClick}> + </button>
     <button type="button" className="counterButton" onClick={decreaseClick}> - </button>
   </div>
  )
}

export default Counter