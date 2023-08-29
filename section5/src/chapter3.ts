/*
인터페이스의 선언 합치기
*/

type TPerson = {
  name: string;
};

type TPerson = {
  age: number;
};
// 타입은 안합쳐지기때문에 같은이름으로 선언할 수 없음.

interface Person {
  name: string;
}
interface Person {
  age: number;
}
// 인터페이스는 동일한 이름으로 선언하면 합쳐지게됨. -> 선언 합침

//단, 확장과 합침은 프로퍼티의 재정의에서 차이가 있음 주의할 것
interface Student extends Person {
  name: 'sia'; //확장할때는 원래 타입의 서브타입이기만 하면 재정의 가능
  age: 20;
}
interface Person {
  // name: 'sia';  //오류!! -> 합침시에 재선언할때는 반드시 동일한 타입으로 해줘야함
  name: string;
}

//모듈보강 -> 타입 선언 합치기는 라이브러리에서 이미 정의된 타입을 재정의하고싶을때 주로 사용한다
