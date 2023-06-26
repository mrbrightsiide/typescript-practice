//enum 타입
//여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입
//타입을 '값'처럼 쓸 수 있음!

//숫자형 이넘
enum Role {
  ADMIN = 0, //숫자 할당을 제거해도 아래의 멤버들은 +1씩 할당됨
  USER = 1,
  GUEST = 2,
}

enum RoleStart {
  ADMIN = 10, //시작할 숫자 지정 가능
  USER,
  GUEST,
}

enum RoleMid {
  ADMIN,
  USER = 5, //중간 숫자 지정 가능
  GUEST,
}

//문자형 이넘
enum Languge {
  korean = 'ko',
  english = 'en',
}

const user1 = {
  name: '관리자',
  role: Role.ADMIN, // 0 할당됨
};

const user2 = {
  name: '관리자',
  role: Role.USER, // 1 할당됨
};

const user3 = {
  name: '관리자',
  role: Role.GUEST, // 2 할당됨
  Languge: Languge.korean, //'ko' 할당됨
};

//이넘타입은 컴파일하면 자바스크립트의 객체로 변환되기 때문에, 컴파일 해도 사라지지 않는다!
