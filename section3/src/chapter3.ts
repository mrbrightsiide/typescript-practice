/*
함수 타입 호환성 : 특정 함수 타입단 다른 함수 타입으로 취급해도 괜찮은가?

1. 반환값의 타입이 호환되는지
2. 매개변수의 타입이 호환되는지
*/

//반환값을 기준으로 함수 호환성을 판단할 때 : 업캐스팅은 가능하고 다운캐스팅은 불가능하다!
type A = () => number;
type B = () => 10;

let a: A = () => 10;
let b: B = () => 10;

a = b; //A타입을 B타입에 대입한다 . number를 number literal에 대입한다 - 업캐스팅 -가능!
b = a; //number literal에 number를 대입한다 - 다운캐스팅 - 에러!

//2-1. 매개변수의 개수가 같을 때
type Animal = { name: string };
type Dog = { name: string; color: string };

type TAnimalFunc = (animal: Animal) => void;
type TDogFunc = (dog: Dog) => void;
//매개변수를 기준으로 함수 타입의 호환성을 판단할때는 : 업캐스팅은 불가능하고 다운캐스팅은 가능하다 !

let aniFun: TAnimalFunc = (animal) => console.log(animal);
let dogFunc: TDogFunc = (dog) => console.log(dog);

dogFunc = aniFun; //다운캐스팅 불가능
aniFun = dogFunc; //업캐스팅 불가능

//왜인지 ...? 함수로 표현해보면 이해가 쉬움
let test = (animal: Animal) => {
  console.log(animal.name);
  console.log(animal.color); //TAnimalFunc타입(슈퍼타입)이 TDogFun이(서브타입)으로 할당된다면, 이처럼 '슈퍼타입에는 없고 서브타입에만 있는 값'을 불러오는 오류가 생길 수 있기 때문
};
let dog = (dog: Dog) => {
  console.log(dog.name); //하지만 슈퍼타입에 있는 값은 서브타입에 항상 있으니까 -> 서브타입에 슈퍼타입을 할당하는 것은 오류가 나지 않음
};

//2-2. 매개변수의 개수가 다를 때 (매개변수의 타입은 물론 같아야 함. 개수만 다를 때)
type Func1 = (a: number, b: number) => void;
type Func2 = (a: number) => void;

let func1: Func1 = (a, b) => console.log(a, b);
let func2: Func2 = (a) => console.log(a);

func1 = func2; //arg 개수가 더 많은 함수에 - arg개수가 더 적은 함수를 할당  가능 .
func2 = func1; //arg 개수가 더 적은 쪽에 - arg 개수가 더 많은 함수를 할당하는 것은 불가능!
