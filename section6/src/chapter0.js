// js의 클래스문법

class Person {
  //필드
  name;
  age;

  //생성자
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  //메소드
  seyHi() {
    console.log(`hi, my name is ${this.name}`); //this는 클래스를 호출한 객체를 가리킴. -> 클래스를 호출한 객체의 name을 콘솔에 찍는다
  }
}

//인스턴스 생성
let student = new Person('sia', 20); //클래스에 전달하는 매개변수는 생성자의 매개변수로 전달됨
student.seyHi();

//클래스의 상속
class Developer extends Person {
  //부모클래스의 필드, 메소드, 생성자가 그대로 내려온다
  favoriteSkill;

  constructor(name, age, favoriteSkill) {
    super(name, age); //super를 호출하면 부모클래스의 생성자가 호출된다! 즉, this.name=name; ... 과 똑같은 일을 한 것
    this.favoriteSkill = favoriteSkill;
  }
}
