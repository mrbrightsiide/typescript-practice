/*
타입 좁히기
조건문 등을 이용해 넓은타입->좁은타입으로
타입을 상황에 따라 좁히는 방법
*/

//value => number:toFixed()

function func(value: number | string | Date) {
  value;
  //   value.toUpperCase(); //유니온타입으로 추론되어서 오류남
  //   value.toFixed(); //여기도 마찬가지로 오류

  if (typeof value === 'number') {
    value.toFixed(); //타입이 number임이 보장되기때문에 컴파일러가 자동으로 number로 타입을 좁혀서 추론함
  }
  if (typeof value === 'string') {
    value.toUpperCase(); //여기도 마찬가지
  }
  /**
   타입을 좁혀주는 if(typeof~ 문을 'type guard'라고 한다
   */
}

type Person = {
  name: string;
  age: number;
};

//타입이 null도 될수있다면?
function func2(value: number | string | Date | null | Person) {
  value;
  if (typeof value === 'number') {
    value.toFixed();
  } else if (typeof value === 'string') {
    value.toUpperCase();
  }
  //    else if (typeof value === 'object') {
  //     value.getTime(); //null의 타입도 object이기때문에 nullable하게 취급되므로 오류
  //   }
  else if (value instanceof Date) {
    console.log(value.getTime()); //이럴땐 instanceof를 사용한다
  }
}

function func3(value: number | string | Date | null | Person) {
  if (typeof value === 'number') {
    console.log(value.toFixed());
  } else if (typeof value === 'string') {
    console.log(value.toUpperCase());
  }
  //    else if (value instanceof Person) {
  //     value.age(); //instanceof문의 뒤에 오는 항은 타입이 될 수 없다. 값만 와야한다 이럴땐 어떻게 해야할까?
  //   }
  else if (value && 'age' in value) {
    console.log(`${value.name}은 ${value.age}살 입니다`);
  } //in연산자를 사용한다 -> age라는 프로퍼티가 있으면 true를 반환하라는 연산자
}
