
// import Counter from './coMPonents/Counter';
import Darkmode from './coMPonents/Darkmode';
import Carrd from './coMPonents/Carrd'
import {useState} from 'react'
// import Login from './coMPonents/Login';

function Firstaction() {
// // logic 
// console.log("App.js")

// const name = "우파루파"; 
// const age = 28; 

// const HI = `안녕하세요. ${name}님! 나이가 ${age}이시네요. 
// 환영합니다`;

// console.log(HI);

// const user = {
//   isLoggedin: true, 
//   role: "admin" //'guest', 'user'
// }

// const greeting = (id = '고객') => { 
//   return `${id}님 안녕하신지요`;
// }

// console.log('안녕', greeting('영현'));

// const learnlist = ['HTML', 'CSS', 'JAVA', 'REACT'];

// for (const element of learnlist) { 
//   console.log(element, '을 공부하고 있다.');
// }

// const addLan = () => { 
//   learnlist.push('Github');
//   const newlist = ['python', ...learnlist]; 
//   console.log(learnlist); 
//   console.log(newlist); 
// }

// addLan();


// const [firstlan, secondlan, thirdlan, fourthlan] = learnlist; 

// console.log(firstlan, secondlan, thirdlan, fourthlan); 


// const id_number = {
//   id : 'youngshin',
//   password: 1234,
//   email: 'fgghg2013@naver.com'
// }; 


// const id_number2 = {
//   id : 'uparupa', 
//   password: 3456, 
//   email: 'uparupa97@icloud.com'
// };

// const id_message = { 
//   message: '안녕하세요'
// };


// const newName = () => { 
//   id_number.id = 'uparupa97'; 
//   console.log(id_number);
// }

// newName();

// const addMessage = {
//   ...id_number, 
//   ...id_message, 
//   name : "주영신", 
//   id: '바꿔볼까'
// }; 

// console.log(addMessage); 

// const addID = () => { 
//   const idList = []; 
//   idList.push(addMessage); 
//   idList.push(id_number2); 
//   console.log(idList); 
// }

// addID(); 



// // const {id, password, email} = id_number; 

// // console.log(id, password, email); 

// // const addId = () => { 
// //   const newid = {...id_message, ...id_number, name: "fgghg2013"};  
// //   console.log(newid); 
// // }

// // addId();




// //사용자가 로그인한 상태이면서, 역할이 admin인 경우에는 관리자페이지 접근 가능

// if (user.isLoggedin && user.role === 'admin') {
//   console.log("관리자 페이지 접근 가능")
// } else {console.log("관리자 페이지 접근 불가 ");}

const [title, setTitle] = useState("초기값"); 


const urlClickButton = () => { 
  window.location.href = "https://namu.wiki/w/%EA%B9%80%EC%9A%B0%EB%B9%88" ; 

}

const urlsecondClick = () => {
  console.log("final clicks");}
 
let [darkpixel, setDarkpixel] = useState(false); 

const darkmodeClick = () => { 
  setDarkpixel (!darkpixel); 
  }

// const [isDarkMode, setIsDarkMode] = useState(false); 

// const handleTheme = () => { 
// setisDarkMode (!isDarkMode);
  // }

  // className = { `wrap ${isDarkMode ? 'dark-mode' : 'light-mode'}`}


//view 

  return (
    <div className="wrap">
    <div className={`wrap ${darkpixel ? "dark" : "light"}`}>
      <Carrd title={title} subText="후츠릿짱짱"/>
      <button type="button" onClick={() => setTitle("변경했습니다")}>Title변경</button> 
      <Carrd onCardbuttonClick={urlClickButton} imageLink={"https://t3.gstatic.com/licensed-image?q=tbn:ANd9GcQBOyAeOot-s1ukUGW6iVmN4UlGBcWx1fd_5_PdxgOiticKByaWNg44t9Wwyh5u5WMg"} title={"김우빈짱"} subTitle={"이것은 김우빈 사진입니다."}/>
      <Carrd onCardbuttonClick={urlsecondClick} imageLink={"https://img.hankyung.com/photo/202405/01.36878930.1.jpg"} title={"변우석"} subText={"다음은 변우석 사진입니다."}/>
      <Darkmode isDarkMode={darkpixel} darkClick={darkmodeClick}/>
    </div>

     {/* <Counter/>   */}
     {/* <Login/> */}
  </div>
  ); 

}

export default Firstaction;
