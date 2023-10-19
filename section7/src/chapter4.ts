/**
 제네릭클래스 => 매개변수의 타입을 유동적으로 사용할 수 있음
 */

class List<T> {
  constructor(private list: T[]) {}
  push(data: T) {
    this.list.push(data);
  }
  pop() {
    this.list.pop();
  }
  print() {
    console.log(this.list);
  }
}

//제네릭인터페이스는 생성자에 전달하는 매개변수의 타입으로 타입변수가 추론되기때문에, 호출시에 타입을 명시하지 않아도됨 !!
const numberList = new List([1, 2, 3]);
numberList.print(); //숫자배열을 전달했으니 List<number> 추론됨

const strList = new List(['a', 'b', 'c']);
strList.print();
strList.pop();
strList.print();
