//분산적인 조건부 타입
//조건부타입을 유니온과 함께 사용할때 분산적으로 동작함 ->집합의 분배법칙처럼
type StringNumberSwitch<T> = T extends number ? number : boolean;
let a: StringNumberSwitch<number>; //a would be never
let b: StringNumberSwitch<boolean>;
let c: StringNumberSwitch<boolean>; //b and c would be boolean
let d: StringNumberSwitch<string | number>; //d would be number|boolean
// StringNumberSwitch<string> => boolean
// StringNumberSwitch<number> => number
//이 두개가 합쳐져서 number|boolean유니온이 됨

//실용적인 예제
//1. 특정 유니온타입으로부터 특정 타입만 제거된 유니온타입 만들기
type Exclude<T, U> = T extends U ? never : T;

type A = Exclude<number | string | boolean, string>; //A would be number|boolean
// Exclude<number, string> => number
// Exclude<string, string> => never
// Exclude<boolean, string> => boolean
//위 세개가 합쳐진 유니온이 됨 -> union타입(합집합)에 never(공집합)이 포함되어있으면 never는 사라진다

//2. 특정 유니온타입으로부터 특정 타입만 추출된 유니온타입 만들기
type Extract<T, U> = T extends U ? T : never;
type B = Extract<number | string | boolean, string>; //B would be string

//분산을 방지하는 것도 가능함 => extends양옆에 대괄호 붙여주면됨
type StringNumberSwitch2<T> = [T] extends [number] ? number : boolean;
let e: StringNumberSwitch2<number | boolean | string>; //e would be just boolean. typescript would check union type 'number | boolean | string' is extended from 'number' type. if this condition is false, e would fall right into the false value.
