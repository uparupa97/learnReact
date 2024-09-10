import React, {useState} from 'react'

const NumberInput = ({onSubmit}) => {
    // 상태 선언
  const [inputValue, setInputValue] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 입력 값 변경 시 호출되는 함수
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // 제출 버튼 클릭 시 호출되는 함수
  const handleSubmit = () => {
    onSubmit(inputValue);
    setIsSubmitted(true); // 제출 상태로 변경
  };



    return (
        <div style={{ textAlign: 'center' }}>
      {/* 조건부 렌더링: 제출되지 않았으면 input 필드와 버튼을 표시 */}
      {!isSubmitted ? (
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange} // 입력 값 변경 시 상태 업데이트
            placeholder="원하는 숫자를 입력하세요"
            className = "numberInputBox"
          />
          <button className="numberSubmitBox" type="button" onClick={handleSubmit}>
            제출
          </button>
        </div>
      ) : (
        // 제출 후 메시지 표시
        <p>{inputValue}을(를) 더했습니다.</p>
      )}
    </div>
      )
}

export default NumberInput