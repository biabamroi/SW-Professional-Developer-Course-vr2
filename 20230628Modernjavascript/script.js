// 상수, 변수
// 기존 자바스크립트 ES5
// ES6, ES7, ES2019... ES6 → ESNEXT
// ECMA Script는 javascript의 기반 스크립팅 언어 명세 


// ES6, var = Variable
// var name = '철수'
// console.log(name)



// ES6, let / const
// let 변화하는 내용을 넣을 때 쓰는 변수 선언법
// const = constant 상수, 항상 유지, 변화하지 않는 내용을 담을 때 사용
// let name = '철수'
// name = '영희'
// console.log(name)

// const myName = '지우'
// myName = '피카츄' // error 
// console.log(myName)



// // 함수
// // ES5
// function multiply (number){
//   return number * 2;
// }
// console.log(multiply(2))

// // ES6 화살표 함수
// // multiply2
// const multiply2 = (number)=>{
//   return number *2;
// }
// console.log(multiply2(3))

// // 화살표 함수에서 매개변수가 1개일 때만 가능한 방법
// const multiply3 = number => number *2;
// console.log(multiply3(5))



/** 
 * class - 객체지향프로그래밍
 * ES6부터 도입된 개념
 * */

// 슬라이더 라이브러리, Swiper-slide 라이브러리 

class Pokemon {
  constructor(){
    this.pokemonName = '피카츄'
  }
  showPokemonName(){
    // 포켓몬 이름을 출력해 주는 메소드
    console.log(this.pokemonName)
  }
}

class Trainer extends Pokemon {
  // 초기화, trainerName 기본값 = '지우'
  constructor(trainerName = '지우'){
    super()
    this.name = trainerName
  }
  // trainer 이름 출력하는 메소드
  showTrainerName(){
    console.log(this.name)
  }
}
const trainer = new Trainer('웅이')
// trainer.name = '웅이'
// console.log(trainer.name)
trainer.showTrainerName()
trainer.showPokemonName()

// class Pokemon {
//   // 초기화, trainerName 기본값 = '지우'
//   constructor(evolutionName = '미뇽'){
//     this.name = evolutionName
//   }
//   // trainer 이름 출력하는 메소드 ★
//   showEvolutionName(){
//     console.log(this.name)
//   }
// }
// const evolution = new Pokemon('신뇽')
// // 클래스.name 재할당
// evolution.name = '망나뇽'
// // console.log(evolution.name)
// evolution.showEvolutionName() // ★
