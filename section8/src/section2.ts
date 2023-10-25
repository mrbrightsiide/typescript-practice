/** keyof 연산자 */
//인터페이스의 키를 뽑아서 스트링리터럴 유니온타입으로 만들어주는 연산자

interface Person {
  name: string;
  age: number;
}

const getValue = (person: Person, key: keyof Person) => {
  // 여기서 key는 'name' | 'age' 유니온 타입이 됨
  return person[key];
};

const person = {
  name: 'sia',
  age: 20,
};

// typeof와 같이 쓸수도있음
type TPerson = typeof person;
// ts에서 객체에 typeof를 사용하면 객체로부터 인터페이스 타입으로 추출해준다

type personKey = keyof TPerson;
type personKey2 = keyof typeof person;
//따라서 이 변수들은 모두 'name' | 'age' 유니온타입이 됨
