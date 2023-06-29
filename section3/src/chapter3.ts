//객체  타입간의 호환성

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  age: number;
};

/* 객체는 프로퍼티를 기준으로 슈퍼타입-서브타입이 나뉜다! */

let dog: Dog = {
  name: '강쥐',
  color: 'black',
  age: 1,
};

let animal: Animal = {
  name: '기린',
  color: 'brown',
};

animal = dog; //이건 업캐스팅이므로 가능
//dog = animal; 다운캐스팅은 불가능!

/* 초과 프로퍼티 검사 

객체 리터럴로 변수를 초기화 하거나 매개변수로 전달할 때는, 객체 타입에 정의된 프로퍼티만 넣을 수 있도록 함.

초과 프로퍼티 검사를 피하려면 객체 리터럴 말고 변수를 넣어주면 됨.
*/

type Book = {
  name: string;
  price: number;
};

type Novel = {
  name: string;
  price: number;
  genre: string;
};

let book: Book = {
  name: '책',
  price: 1234,
};

let novel: Novel = {
  name: '소설책',
  price: 12342,
  genre: '소설',
};

book = novel; //업캐스팅 가능
// novel = book 마찬가지로 다운캐스팅은 불가능

let novel2: Book = {
  name: '소설책',
  price: 12342,
  // genre: '소설', 객체 리터럴로 정의헀기 때문에 Book타입 정의에 없는 프로퍼티를 추가하려면 오류 남. book = novel과 똑같은 동작인데도 -> 초과 프로퍼티 검사가 발동했기 때문
};

let book2 = novel; //변수로 전달하면 오류가 나지 않는다

function func(book: Book) {}

func({
  name: '소설책',
  price: 12342,
  // genre: '소설', 이경우도 마찬가지로 초과 프로퍼티 검사가 실행됨
});

func(novel); //매개변수로 변수를 전달하면 오류가 나지 않는다
