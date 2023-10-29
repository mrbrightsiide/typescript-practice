/** 조건부 타입 */
interface A {
  name: string;
  age: number;
}
interface B extends A {
  hobby: string;
}

type AOrB = B extends A ? string : number; //앞의 조건이 참이면 string이 되니까 당연히 AOrB는 string 타입으로 추론됨

/** 조건부타입은 제네릭과 함께 사용할 때 유용 */

type NumOrStr<T> = T extends string ? number : string;

var str: NumOrStr<number>;
var num: NumOrStr<string>;

//논리의 흐름에따라서 타입을 가변적으로 지정할 수 있다!
function removeSpace(text?: string) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return undefined;
  }
}

let res = removeSpace('hello world');
res?.toUpperCase();
res.toUpperCase() as string;
//타입단언이나 옵셔널체이닝을 사용하지 않아도 반환값이 string임을 보장할 수 있다 !

type StrOrNull<T> = T extends string ? string : null;

//타입변수의 타입에 따라서 반환값 타입을 조건부로 지정할 수 있음
function removeSpaceWithConditonalType<T>(
  text: T
): T extends string ? string : null {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '') as any;
  } else {
    return null as any;
  }
}

//반환값의 타입을 as any로 단언하고싶지 않다면 함수 오버로딩과 함께 쓰면됨
function removeSpaceOverloaded<T>(text: T): T extends string ? string : null;

function removeSpaceOverloaded(text: any) {
  if (typeof text === 'string') {
    return text.replaceAll(' ', '');
  } else {
    return null;
  }
}

let res2 = removeSpaceOverloaded('hello world');
res2.toLowerCase(); //this would be string

let resNull = removeSpaceOverloaded(123);
resNull; //this would be null
