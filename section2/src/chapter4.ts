//타입 별칭
//타입을 변수처럼 사용. -> 중복을 줄임!
type User = { id: number; nickname: string; birth: string };

let user: User = {
  id: 1234,
  nickname: 'sia',
  birth: '08/02',
};

//타입은 같은 스코프 내에서 같은 식별자로 정의할 수 없음!

//인덱스 시그니처
type CoutryCodes = {
  Korea: string;
  UnitedState: string;
  UnitedKingdom: string;
}; //이런 타입에서 계속 국가가 추가된다면..? 타입에도 계속 국가들을 일일히 추가해줘야할까?

//key와 value의 타입이 규칙을 갖고 움직이는 타입을 정의할때 유용하게 사용 -> 인덱스 시그니처
type CoutryCode = {
  [key: string]: string;
};

//주의! 인덱스시그니처는 프로퍼티가 없어도 경고가 뜨지 않음.
//주의! 프로퍼티를 추가하려면 value의 타입이 '일치하거나 호환'되어야 함.
