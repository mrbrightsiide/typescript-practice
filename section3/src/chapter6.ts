/*
타입 단언
*/

type Person = {
  name: string;
  age: number;
};

let person = {}; //person객체를 일단 빈객체로 초기화고 나중에 프로퍼티를 할당하고싶은데
person.name = 'sia';
person.age = 26;
//그러면 오류남 ... ts컴파일러는 초기화한 값(빈 객체)를 기준으로 타입을 추론하기 때문에
let personAsserted = {} as Person; //단언하면 오류가 나지 않는다
personAsserted.name = 'sia';
personAsserted.age = 26;

/*
타입단언의 규칙
값 as 단언 <- 단언식
A as B
A가 B의 슈퍼타입이거나 , 서브타입이어야 함
*/

let a = 'hi' as never; //never은 모든타입의 서브타입이라서 당연히 단언할 수 있음
let b = true as any; //any도 unknown을 제외한 모든타입의 슈퍼타입이라서 단언 가능
let c = 10 as string; //하지만? number와 string은 교집합이 없다. 단언하려면 오류남

// 다중단언 -> 이건 트릭이니까 정말 어쩔 수 없을떄만 사용하기. unknown으로 단언을 한번 거치면 모든 타입의 슈퍼타입이 되기 때문에 단언 가능.
let d = 10 as unknown as string;

/*
const 단언 -> 객체 타입과 함께 사용할 때 유용함
객체의 모든 프로퍼티가 readonly 프로퍼티가 됨
*/
let cat = {
  name: '나비',
  age: 2,
} as const;
cat.name = '야옹'; //할당 불가능. readonly

/*
Non Null 단언
non null 단언자 -> !
해당 값이 null이거나 undefined가 아닐 것이라고 ts컴파일러를 속이는 것
*/
type User = {
  name: string;
  id: number;
  nickname?: string; //nickname정보는 있을수도 있고 없을수도 있음. optional property
};

let user: User = {
  name: 'admin',
  id: 20,
  nickname: 'bumb',
};

let len: number = user.nickname?.length; //nickname이 옵셔널이라서 number | undefind로 추론되어 오류남

let lenAsserted: number = user.nickname!.length; //이럴때 non null 단언자'!'로 컴파일러를 속여준다

// 단언은 컴파일 단계를 통과하기 때문에 , 런타임에 어떻게 오류가 발생할지 모름. 주의해서 정말 확실할때만 단언하자! 그래서 이름이 assertion이었구나 ..
