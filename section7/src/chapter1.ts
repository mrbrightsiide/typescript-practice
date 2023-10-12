//타입변수 응용하기

//첫번째 경우 => 타입변수를 여러개 사용하고 싶은 경우
function swap<T, U>(a: T, b: U) {
  //a와 b의 타입을 둘다 T로 선언하면, 첫번째 인수의 타입이 string일 경우, 두번째 인수 b의 타입도 당연히 string으로 추론됨. 두개가 어떤 타입일지는 모르지만, 두 인수수 타입이 달라도 문제가 생기지 않게 하려면 -> 타입변수를 T와 U두개로 사용해준다
  return [b, a];
}

const [a, b] = swap(2, "30"); //swap의 반환값을 할당함
console.log(a, b);
const [aa, bb] = swap(10, 10);

//두번째 경우 ->배열을 받아서 특정 인덱스 원소의 타입을 반환하고 싶을 경우

/** 타입변수를 배열타입과 함께 사용할 수 있음.*/
function returnFirstValue<T>(value: T[]): T {
  return value[0];
}

let num = returnFirstValue([1, 2, 3]);
let str = returnFirstValue(["hello", 2, 3]); //이런경우 유니온 타입으로 반환됨. ts는 첫번째 원소가 어떤 타입인지 모르니까!

/** 특정 인덱스 원소의 타입만 알고있으면 되고 , 나머지 원소의 타입은 알 필요가 없는 경우 -> 튜플사용 */
function returnFirstValueTuple<T>(value: [T, ...unknown[]]): T {
  //rest parameter문법처럼 똑같이 unknown배열을 뒤에 넣어주면됨. 이 함수는 첫번째 원소의 타입만 알고있으면 되니까
  return value[0];
}

let numTuple = returnFirstValue([1, 2, 3]);
let strTuple = returnFirstValue(["hello", 2, 3]); //이런경우 유니온 타입으로 반환됨. ts는 첫번째 원소가 어떤 타입인지 모르니까!

//세번째 경우 -> 매개변수가 어떤 타입이 될지는 모르지만, 특정 프로퍼티를 가지고 있다는 것을 보장하고 싶을 경우

interface IHasLen {
  length: number;
}

/** 타입변수에 특정 인터페이스를 확장해서 매개변수를 제한할 수 있다 */
function getLength<T extends IHasLen>(val: T) {
  //val이 무조건 length라는 프로퍼티를 가진 객체라는 것을 보장함
  return val.length;
}

let arr = getLength([1, 2, 3]);
let fakeArr = getLength({ length: 2 });
