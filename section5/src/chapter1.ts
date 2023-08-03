/*

인터페이스
-> 객체의 타입을 정의할때 유용한 문법
*/

interface Person {
  name: string;
  age: number;
  sayHi: () => void;
  sayHello(): void; //호출 시그니처로 정의하기도 가능 -> 메소드를 오버로딩하는 경우 사용
  sayHello(a: number, b: number): void;
}

//인터페이스 앞에 I붙이는 헝가리안 표기법 - 파스칼, 카멜, 스네이크처럼 js에서 흔히 쓰이는 표기법은 아님
interface IPerson {
  name: string;
  age: number;
}

//인터페이스는 타입처럼 유니온이나 인터섹션은 불가함

const person: IPerson = {
  name: 'name',
  age: 123,
};
