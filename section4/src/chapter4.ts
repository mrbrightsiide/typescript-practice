/*
사용자 정의 타입가드 - 함수를 사용자가 만들어서 타입가드처럼 사용함
서로소 유니온으로 타입을 좁힐 수 없을때, 라이브러리에서 제공하는 타입이어서 사용자가 수정할 수 없을 때 등 사용
*/

type Dog = { name: string; isBark: boolean };
type Cat = { name: string; isMew: boolean };

type Animal = Dog | Cat;

function func(animal: Animal) {
  //Dog or Cat인 인자를 받아서, func안에서 인자의 타입을 좁히고싶은데 타입을 임의로 수정할 수 없다?
  if ('isBark' in animal) {
    //강아지
  }
  if ('isMew' in animal) {
    //고양이
  }
  //이런식으로 타입을 좁혀줄 수는 있겠지만.. 프로퍼티를 기준으로 타입가드를 하면 직관적이지 않다.
  //이럴때 타입을 좁혀주는 사용자정의 타입가드 함수를 만듦
}

function isDogg(animal: Animal) {
  return animal.isBark !== undefined; //animal에 isBark라는 프로퍼티가 undefined가 아니면, 즉 isBark가 존재한다면 true를 반환하는 함수. 근데 이러면 여전히 animal에 isBark가 있는지 타입스크립트가 알 수 없다
}

function isDog(animal: Animal): animal is Dog {
  //A is B -> 이 함수가 true를 반환한다면, A의 타입은 B라는것을 타입스크립트에게 알려주는 문법!
  return (animal as Dog).isBark !== undefined; //animal의 타입을 Dog로 단언해주면됨
}

function funcc(animal: Animal) {
  if (isDog(animal)) {
    animal.isBark; //isDog라는 사용자정의 타입가드함수를 사용하면, 타입스크립트가 해당 인자를 Dog로 잘 추론하고 있는걸 볼 수 있다
  } else {
    animal.isMew;
  }
}
