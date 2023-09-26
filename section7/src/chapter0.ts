/*
제네릭
제네릭함수 -> 함수의 인수가 어떤 타입인지에 따라서 반환값을 다른 타입으로 지정할 수 있음
*/

//인수와 똑같은 타입을 반환해주는 func 함수를 만들고 싶은데, value의 타입이 any니까 반환값도 당연히 any로 추론됨
const func = (value: any) => {
  return value;
};

//이럴 때 사용하는게 제네릭함수
const genericFunc = <T>(value: T): T => {
  // T는 타입변수 : js의 변수처럼 변할 수 있는 값. 호출할때마다 인수의 타입으로 추론이 가능하게됨!
  return value;
};

let num = genericFunc(10);
let str = genericFunc('string');
let bool = genericFunc(true);

// 추론하게 놔두지 않고 호출할때 타입을 명시적으로 정의할 수도 있다.
let tuple = genericFunc<[number, number]>([1, 2]); //튜플타입을 반환하게 하고싶다 ! => 타입변수에 튜플타입을 전달하면 됨
