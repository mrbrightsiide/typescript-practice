/** 제네릭 인터페이스  -> 인터페이스 호출 시에 타입을 유동적으로 할당할 수 있음 */
interface gnrInt<T, V> {
  name: T;
  age: V;
}

const me: gnrInt<string, number> = {
  name: 'sia',
  age: 20,
};

// 제네릭 인터페이스를 인덱스 시그니처와 함께 사용하면 더 유연하게 인터페이스를 정의할 수 있음!
interface gnrIntWithIndexSigniture<T> {
  [key: string]: T;
}

const obj: gnrIntWithIndexSigniture<number> = {
  str: -2399,
};
const obj2: gnrIntWithIndexSigniture<boolean> = {
  str: true,
};

//유저관리 프로그램 -> 유저 구분 : 학생유저/개발자유저

interface Student {
  type: 'student';
  school: string;
}

interface Dev {
  type: 'developer';
  skill: string;
}

interface User {
  name: string;
  profile: Student | Dev; //각 객체가 string literal로 type프로퍼티를 가짐으로써 그 자체가 타입가드 역할을 함
}

const student: User = {
  name: 'sia',
  profile: { type: 'student', school: 'yale' },
};

const dev: User = {
  name: 'sia',
  profile: { type: 'developer', skill: 'java' },
};

const goToSchool = (user: User) => {
  if (user.profile.type !== 'student') {
    return; //유저 프로필의 타입이 'student'가 아닌 값을 따로 처리해줘야함
  }
  console.log(user.profile.school); //자동으로 user의 타입은 student로 추론됨
  console.log(`${user.profile.school}학교로 갑니다`);
};

//근데 이렇게하면 추후 유저의 타입이 더 추가되면, 특정 유저타입에만 쓸 수 있는 함수들을 만들 때 타입가드를 일일히 다 해줘야함?

interface GenericUser<T> {
  name: string;
  profile: T;
}

const goToSchoolGnr = (user: GenericUser<Student>) => {
  //매개변수 user를 GenericUser중에서 오직 Student타입의 유저로만 제한함!
  console.log(`${user.profile.school}학교로 갑니다`);
};

//복잡하고 타입이 많아지는 데이터(ex.유저데이터)의 경우 제네릭 인터페이스를 사용하면 불필요한 타입가드를 줄일 수 있다 !
