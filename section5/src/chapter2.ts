/*
인터페이스의 확장
*/

interface Animal {
  name: string;
  age: number;
  color: string;
}

interface Dog {
  name: string;
  age: number;
  color: string; //서브 타입들에서 계속 중복되는 프로퍼티들이 나올때 -> 공통 인터페이스로 빼고 해당 인터페이스로 확장함 (또는 상속받음)
  isBark: boolean;
}

interface DogExtednded extends Animal {
  name: 'bow'; //프로퍼티의 재정의도 가능. 단, > 부모가 가진 프로퍼티 타입의 서브타입일 경우만 <
  isBark: boolean;
}

interface Cat extends Animal {
  isMeow: boolean;
}

interface Rabbit extends Animal {
  ishop: boolean;
}

interface CatDog extends Cat, Dog {
  //다중상속 가능!
}

const catdog: CatDog = {
  name: '',
  age: 123,
  color: '',
  isBark: true,
  isMeow: true,
};

//객체타입을 정의할때는 이런 기능을 유용하게 사용할 수 있는 인터페이스를 사용하도록 하자
