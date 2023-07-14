//함수의 타입정의
//함수를 설명하는 방법 - 함수가 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 값을 반환하는지

function func(a: number, b: number) {
  return a + b; //매개변수에 타입을 지정하면 반환값은 자동으로 추론된다
}

//화살표 함수의 타입정의
const add = (a: number, b: number) => a + b;

function intro(name = 'sia') {
  //매개변수에 디폴트 값을 지정해도 매개변수의 타입이 자동으로 추론됨
  console.log(name);
}

//optional argument는 항상 마지막에 와야함
function intro2(name = 'sia', tall?: number) {
  console.log(name);

  if (typeof tall === 'number') {
    //optional argument는 undefined일수 있으니까 연산 등을 할때 오류가 남 . 타입가드로 타입을 좁혀주면 가능
    console.log(tall + 10);
  }
}

/*
rest parameter - 가변적인 길이의 arg를 전달하기 위한 자스 문법

rest parameter에 들어올 자료형을 지정하고싶다 -> 배열을 이용하면됨
*/

function getSum(...rest: number[]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum(1, 2, 3);
getSum(1, 2, 3, 4, 5);

/**
rest parameter의 개수를 명시하고 싶다 ! -> tuple 타입으로 지정하면됨
 */

function getSum3args(...rest: [number, number, number]) {
  let sum = 0;
  rest.forEach((it) => (sum += it));

  return sum;
}

getSum3args(1, 2, 3);
getSum3args(1, 2, 3, 4); //타입에러
