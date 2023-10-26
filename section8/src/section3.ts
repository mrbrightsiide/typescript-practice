//맵드타입 -> 기존에 정의된 인터페이스를 다양하게 새로운 타입으로 활용할 수 있음

interface User {
  name: string;
  age: number;
  country: string;
}

//유저 정보 불러오기
function fetchUser(): User {
  return {
    name: 'sia',
    age: 20,
    country: 'korea',
  };
}

const user = fetchUser();

//유저 정보 수정하기
function modifyUser(user: User) {}

modifyUser({ age: 26 }); //매개변수로 수정할 프로퍼티만 보내고싶은데, User객체는 모든 프로퍼티들이 필수값임. User객체의 형태는 유지하면서 프로퍼티 값만 옵셔널로 바꿀 수 없을까?

//맵드 타입을 사용 -> User객체의 키를 유니온 타입으로 정의하고, User[key]로 인덱스드 엑세스를 사용해 해당 key의 값의 타입을 옵셔널로 할당한다.
type partialUser = {
  //맵드타입은 꼭 타입별칭과 함께 사용해야함!
  [key in 'name' | 'age' | 'country']?: User[key];
};

type mappedUserWithkeyof = {
  [key in keyof User]?: User[key]; //keyof User를 사용해서 똑같은 유니온타입을 추출해냄. mappedUser객체와 완전히 동일하게 정의됨.
};

function modifyUserMapped(user: partialUser) {}

modifyUserMapped({ age: 26 });

//응용 -> 모든 프로퍼티를 readOnly로 만들고싶다?
type reaonlyUser = {
  readonly [key in keyof User]: User[key]; //앞에 readonly를 붙여주면됨
};

function fetchReadOnlyUser(): reaonlyUser {
  return {
    name: 'sia',
    age: 20,
    country: 'korea',
  };
}

const readonlyUser = fetchReadOnlyUser();
readonlyUser.name = 'hi'; //모든 프로퍼티가 readonly인걸 볼수있음
