/* 대수타입
여러개의 타입을 합성해서 새롭게 만들어낸타입
-> 합집합 타입과 교집합 타입이 존재
*/

//합집합 : Union
let a: string | null | number;
a = 12;
a = null;
a = '문자';

let arr: (number | string)[]; //배열도 유니온 타입으로 선언 가능
arr = [1, 'hello'];

type Dog = {
  name: string;
  color: string;
};

type Person = {
  name: string;
  contry: string;
};

type Union1 = Dog | Person;

let union1: Union1 = { name: '', color: '' }; //Dog타입에 속함;
let union2: Union1 = { name: '', contry: '' }; //Person 타입에 속함
let union3: Union1 = { name: '', contry: '', color: '' }; //Dog와 Person의 교집합에 속함
let union4: Union1 = { name: '' };
/* name만 있으면 
dog도, person도, 두 집합간의 교집합(dog도 되고 person도 되는) 객체가 아니기 때문에 오류!
*/

//교집합 타입 : Intersection
let varr: number & string; //-> 기본타입은 왠만하면 겹치는 부분이 없기 때문에 인터섹션 타입으로 지정하면 never가 되는 경우가 대부분 . -> 인터섹션은 객체에 많이 사용한다 .

type InterSection = Dog & Person;

let inter: InterSection = {
  name: '',
  color: '',
  contry: '',
};
//교집합 -> Dog도 되고 Person도 될 수 있는 집합이어야 하기 때문에 두 타입에 지정된 프로퍼티를 모두 가져야 오류가 나지 않는다

let inter2: InterSection = {
  name: '',
  color: '',
};
//프로퍼티가 하나라도 빠지면 당연히 오류남!
