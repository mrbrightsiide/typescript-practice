//배열
let numArr: number[] = [1, 2, 3];
let strArr: string[] = ['hello', 'world'];
let boolArr: Array<boolean> = [true, false]; //제네릭문법으로 타입 정의

//배열에 들어가는 요소들의 타입이 다양할 경우
let multiArr: (string | number)[] = [1, 'hello']; //union타입

//다차원 배열의 타입 정의
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

//튜플 - JS에는 없는 자료형. 배열이지만 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];
// tup1 = [1, 'hi']; //오류발생!

tup1.push(2);
tup1.pop();
//이렇게 배열메소드를 사용하면 길이 제한이 발생하지 않음, js에서는 그냥 배열로 취급하기 때문에.

/* 그럼 언제 튜플을 써? -> 인덱스의 위치에 넣는 값이 이미 정해져 있고, 배열에 넣는 자료형의 순서가 헷갈리지 않도록 할때 */
let user: [string, number][] = [
  ['시아', 1],
  ['민규', 2],
  // [3, '민규'] 를 추가하려고 하면 오류 발생!
];
