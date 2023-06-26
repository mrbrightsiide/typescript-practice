//객체

let user: object = {}; //이렇게쓰면 타입이 객체라는 것 이외 아무런 정보도 없음

let users: { id: number; name: string } = {
  id: 123,
  name: 'sia',
}; //타입을 객체 리터럴로 정의

/*
구조적 타입 시스템 -> property based type
명목적 타입 시스템 -> name based type
*/

let userOptional: {
  id?: number; //옵셔널 프로퍼티 (값이 있어도 되고 없어도됨. 있을 경우에만 타입 지정)
  name: string;
} = {
  name: 'sia',
};

const secret: { readonly apikey: string } = { apikey: '1234' };

// secret.apikey = '12345'; 재할당 불가능
