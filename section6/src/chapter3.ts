//접근 제어자 access modifier

class Person {
  public name: string; //기본 접근제어자는 public
  private age: number; //privaite -> 클래스 외부에서 접근 자체가 불가능함. 메소드 안에서 접근 가능, 파생 클래스에서 접근 불가능
  protected position: string; //외부 접근 불가. 파생클래스에서는 접근 가능

  //생성자 매개변수에 타입 지정
  constructor(name: string, age: number, position: string) {
    this.name = name;
    this.age = age;
    this.position = position;
  }

  add1ToAge(): number {
    return this.age + 1;
  }
}

const person = new Person('sia', 20, 'developer'); //

class Developer extends Person {
  favoriteSkill: string;

  constructor(
    name: string,
    age: number,
    position: string,
    favoriteSkill: string
  ) {
    super(name, age, position);
    this.position = position;
    this.favoriteSkill = favoriteSkill;
  }
}
