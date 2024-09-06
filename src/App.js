function Firstaction() {
// logic 
console.log("App.js")

const name = "우파루파"; 
const age = 28; 

const HI = `안녕하세요. ${name}님! 나이가 ${age}이시네요. 
환영합니다`;

console.log(HI);

const user = {
  isLoggedin: true, 
  role: "admin" //'guest', 'user'
}

//사용자가 로그인한 상태이면서, 역할이 admin인 경우에는 관리자페이지 접근 가능

if (user.isLoggedin && user.role === 'admin') {
  console.log("관리자 페이지 접근 가능")
} else {console.log("관리자 페이지 접근 불가 ");}

//view 

  return <div>Hello world!</div>;
}

export default Firstaction;
