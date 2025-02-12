// 삼항연산자 : 리액트에서 많이 사용

let person = {
  name : 'john',
  age : 22,
  colors : ['red','green','blue','yellow','pink','orange','white','black']
}

// person이 있다면
// john 출력 / 없으면 '없다'
// if(person){
//   // if 조건이 true일 때 실행 
//   console.log(person.name);
// }else{
//   console.log('없다');
// }

// console.log(person ? person.name : '없다')



// age가 18살 이상이라면 '성인', 아니라면 '미성년자'

// if(person.age >= 18){
//   console.log('성인');
// }else{
//   console.log('미성년자');
// }

// console.log(person.age >= 18 ? '성인' : '미성년자');



// colors라는 배열의 길이가 5이상일 경우
// console.log '길다' 아닐 경우 '짧다'

// if(person.colors.length >= 5){
//   result = '길다';
// }else{
//   result = '짧다';
// }
// console.log(result);

// console.log(person.colors.length >= 5 ? '길다' : '짧다');

// let result = person.colors.length >= 5 ? '길다' : '짧다';
// console.log(result);



// 삼항연산자로 다중 조건
// person age가 65세 이상일 경우 '노인'
// 18세 이상이면 '성인'
// 그 이하는 '미성년자'

// if(person.age >= 65){
//   result = '노인';
// }else if(person.age >= 18){
//   result = '성인';
// }else{
//   result = '미성년자';
// }
// console.log(result);

// console.log(person.age >= 65 ? '노인' : person.age >= 18 ? '성인' : '미성년자');

// 삼항연산자로 다중 조건을 작성할 경우
// 조건을 소괄호로 묶어준다.

// console.log((person.age >= 65) ? '노인' : (person.age >= 18) ? '성인' : '미성년자');



// num1이 num2보다 크면 'num1 > num2'
// num2가 num3보다 크면 'num2 > num3'
// num3이 제일 크면 'num3이 가장 크다'
// let num1 = 10;
// let num2 = 20;
// let num3 = 30;

// console.log(num1 > num2 ? 'num1 > num2' : num2 > num3 ? 'num2 > num3' : num1 || num2 < num3 ? '가장 큰 것은 num3' : '오류');

// let result = (num1 > num2) ? 'num1 > num2' : (num2 > num3) ? 'num2 > num3' : 'num3이 가장 크다';
// console.log(result);



// 삼항연산자 논리 계산(true, false)
// person.name이 있다면 person.name 출력 없다면 '없다'

// console.log(person.name ? person.name : '없다'); // john
// console.log(person.name ? '이름 : ' + person.name : '없다');  // 이름 : john
// console.log(person.name == '' ? '이름 : ' + person.name : '없다'); // 없다



