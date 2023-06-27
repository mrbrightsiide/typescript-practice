//void -> 아무것도 없음을 의미하는 타입
function func1(): void {
  console.log('hello');
}
//아무것도 반환하지 않는 함수의 자료형을 undefined또는 null로 지정하면, return 또는 return null;을 반드시 명시해야함. -> 이를 피하려면 함수 반환값의 타입으로 void를 지정해주면됨. 반환값이 없음을 명시 .

//never -> 존재하지 않는 불가능한 타입
function func2(): never {
  while (true) {} //무한루프처럼 함수에 반환값이 있는 것 자체가 모순일 때
}

function fun3(): never {
  throw new Error(); //이 함수도 호출되자마자 바로 프로그램이 중지될 것이기 때문에 never가 의미적으로 맞음
}
