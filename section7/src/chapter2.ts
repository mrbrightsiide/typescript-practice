//제네릭 함수 응용

//map메소드의 타입정의

const arr = [1, 2, 3];
const newArr = arr.map((it) => it * 2); //it이 자동으로 number로 타입추론됨

function map<T, U>(arr: T[], callback: (item: T) => U) {
  //매개변수 arr의 원소의 타입과 callback함수 반환값의 타입이 꼭 같지 않을 수도 있다 -> 타입변수를 두개 사용: 하나는 매개변수, 하나는 callback의 반환값
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
}

map(arr, (el) => el.toFixed());
map(arr, (el) => el.toString()); //문자열로 형변환해도 arr은 숫자배열, callback의 반환값은 string으로 잘 추론됨 !

function forEach<T, U>(arr: T[], callback: (val: T) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}

forEach(arr, (item) => item.toFixed());
forEach(['123', '12'], (item) => {
  console.log(item.toLocaleString());
});

// => 제네릭함수를 이용하면 매개변수의 타입을 유연하게 잘 정의할 수 있다 !
