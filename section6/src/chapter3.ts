/*
인터페이스로 설계도를 먼저 그리고 클래스 구현이 가능하다
(보통 이렇게 잘 쓰지는 않는데, 정교한 프로그래밍을 해야할 때나 사용하거나 라이브러리 개발/코드 볼 때 유용)
 */

interface ICharacter {
  name: string;
  age: number;
  //   moveSpeed: number; -> 이 필드는 private으로 하고싶은데 인터페이스에서 구현하면 무조건 public임
  move(): void;
}

class Character implements ICharacter {
  constructor(
    public name: string,
    public age: number,
    private moveSpeed: number
  ) {} //생성자의 구현부를 생략하고 싶으면 'public' 접근제어자를 생성자의 매개변수로 달아주면됨. 인터페이스로 정의한 필드들은 무조건 public이기 때문에, private필드가 필요하면  인터페이스에서 구현하지 말고 따로 전달해야됨

  move(): void {
    console.log(`${this.moveSpeed} 속도로 이동한다`);
  }
}
