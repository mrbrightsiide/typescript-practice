// 함수 오버로딩 -> 하나의 함수를 매개변수의 개수나 타입에 따라 여러가지 버전으로 만드는 문법

/*
하나의 함수 func, 모든 매개변수의 타입 number
ver1. 매개변수가 1개라면 => 매개변수에 20을 곱한 값 출력
ver2. 매개변수가 3개라면 => 매개변수를 전부 더한 값 출력
*/

//버전별로 함수를 만든다 (몸체 없이) -> 오버로드 시그니쳐
function func(a: number): void;
function func(a: number, b: number, c: number): void;

//실제 구현부 (구현부가 없으면 오류남) -> 구현 시그니처
// function func(a: number, b: number, c: number) {} //이렇게 세개 다 필수 매개변수로 쓰면 -> 매개변수가 1개인 오버로드 시그니처에서 구현부와 맞지 않다고 오류남. 당연함...
function func(a: number, b?: number, c?: number) {
  //매개변수가 모든 오버로드 시그니처와 호환되도록 구현부를 짜주어야 한다
  if (typeof b === 'number' && typeof c === 'number') {
    return a + b + c;
  } else {
    return a * 20;
  }
}

// func(); 오류
func(1); //호출부 -> 오버로드 시그니처들에 적합한 매개변수만 (1개,3개일때만) 오류가 나지 않음
// func(1, 2); 오류
func(1, 2, 3);

//타입스크립트 라이브러리들은 이런 오버로딩을 사용해서 구현하는 경우가 있다 -> 함수 오버로딩을 잘 알아두면 라이브러리 코드 보는데에 도움이 될 것
