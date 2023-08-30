// 타입스크립트의 클래스문법
class Person {
  // 필드 타입 지정
  name: string;
  age: number;

  //생성자 매개변수에 타입 지정
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  //메소드의 반환값 타입 지정
  add1ToAge(): number {
    return this.age + 1;
  }
}

const person = new Person('sia', 20);
console.log(person.add1ToAge());

// ts에서 클래스는 클래스 자체가 하나의 타입으로 취급되기도 한다. 객체를 생성해서, 타입을 우리가 만든 클래스로 지정하면...
const developer: Person = { name: 'sia', age: 20, add1ToAge: () => 20 }; //Person타입이 가진 필드와 메소드를 모두 가지는 객체일 것으로 추론
//how can it possible? -> 타입스크립트는 구조적으로 타입 시스템을 따르기 때문에, 클래스의 구조를 보고 이런필드와 이런 메소드가 있으면 이런 타입이라고 하자 -> 라고 추론하기 때문

//클래스 상속
class Developer extends Person {
  favoriteSkill: string;

  constructor(name: string, age: number, favoriteSkill: string) {
    super(name, age); //ts는 자식 클래스에서 생성자 만들때 super호출안하면 오류띄워줌
    this.favoriteSkill = favoriteSkill;
  }
}
