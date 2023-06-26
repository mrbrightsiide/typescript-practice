//any : 특정 변수의 타입을 우리가 확실히 모를 때. 모든 타입이 될 수 있음! js의 변수와 같음

let any: any = 2;
any = 'hi';
let num: number;
num = any; // 할당도 가능

/*
어떤 값이든 할당할 수 있고, 어떤 타입으로 정의된 변수에도 할당할 수 있다.
any 타입은 타입 검사를 안하는 것과 같음. -> 자료형이 다르면 런타임에 에러가 발생한다!
 */

/*
unknown
어떤 값이든 할당할 수 있지만, 반대는 안된다! */
let uk: unknown = 'hi';
uk = 123;
uk = true;

// 어떤 타입의 변수에도 할당할 수 없고, 어떤 연산에도 참여할 수 없으며, 메소드도 사용할 수 없다
let number: number;
number = uk; //타입에러!
uk.toUpperCase(); //메소드 사용불가
uk.toFixed(); //메소드 사용불가

//메소드를 쓰고 싶다면? 조건문을 이용해 타입을 보장해줘야 함
if (typeof uk === 'string') {
  uk.toUpperCase();
}
