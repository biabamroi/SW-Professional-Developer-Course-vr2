// Arrow Fucntion(화살표 함수)
// Javascript ES6

// function(){}
// () => {}

// 함수 : 항상 목적에 맞게 사용
// 1. 여러 코드를 하나의 코드로 묶을 때

// Arrow Function의 장점
// 1. 파라미터가 하나일 때 소괄호 생략 가능
// 2. 코드가 줄바꿈 없이 한 줄이면 중괄호, return 생략 가능

// 함수 선언식
// function plus(num) {
//   return num + 10;
// }
// console.log(plus(10))

// Arrow Function
// let plus = (num) => {return num + 10}
// let plus = num => num + 10
// console.log(plus(10))


// [1,2,3,4].forEach(function(num){
//   console.log(num);
// })

// Arrow Function
// 매개변수가 하나고, 코드가 한 줄일때 (),{} 생략 가능
// [1,2,3,4].forEach(n=>console.log(n));



let btn = document.getElementById('btn');

// this == e.currentTarget
// btn.addEventListener('click', function(e){
//   this.innerHTML = '버튼';
//   e.currentTarget.innerHTML = '버튼튼';
//   console.log(this);
//   console.log(e.currentTarget);
// })


// console.log(this);

// 자바스크립트 / 객체지향 언어 / window 라는 객체에 코드를 작성하는 것

// arrow function은 함수 내의 this 값을 변경시키지 않는다.  
// └ 함수 밖의 초기 this값을 사용 
// this != e.currentTarget
// arrow function에서 this값 => 함수 밖 this값 그대로 사용

// btn.addEventListener('click', (e)=>{
//   // this.innerHTML = '버튼';
//   e.currentTarget.innerHTML = '버튼';
//   console.log(this);
//   console.log(e.currentTarget);
// })

// 함수 선언식이랑 arrow function의 this값이 다르다.
