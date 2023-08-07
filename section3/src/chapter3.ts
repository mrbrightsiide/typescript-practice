/**
함수 타입 표현식 : 타입 별칭을 이용해서 함수의 타입을 별도로 정의할 수 있다 
 */

type Operation = (a: number, b: number) => number;
const Operation: Operation = (a, b) => a + b;

//왜 표현식이 유용하느냐? -> 비슷한 함수들에 함수 타입 표현식으로 정의한 타입을  재사용 할 수 있음
const sub: Operation = (a, b) => a - b;
const multiply: Operation = (a, b) => a * b;

/**
  호출 시그니처 (콜 시그니처)
 */

type Operation2 = {
  (a: number, b: number): number;
};
//함수 표현식과 동일한 기능을 함. 객체형식처럼 타입의 형식을 정의할 수 있는 문법
const sub2: Operation = (a, b) => a + b;
