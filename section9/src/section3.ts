/**
 * infer -> 조건부타입에서 원하는 타입으로 추론하는 기능
 *
 */

type FuncA = () => number;
type FuncB = () => string;
type ReturnValueNum<T> = T extends () => number ? number : never;
let a: ReturnValueNum<FuncA>;
let b: ReturnValueNum<FuncB>;
//이러면 함수의 반환값만 뽑아온 타입을 만들고싶은데, 반환값의 타입이 number이외면 never로 추론됨. () => number를 가변적으로 사용할 수 없을까

type InferedReturnValue<T> = T extends () => infer R ? R : never;
//infer R = R을 T의 슈퍼타입이 될 수 있는 타입으로 알아서 추론해라는 뜻
let c: InferedReturnValue<FuncA>; //number
let d: InferedReturnValue<FuncB>; //string
let e: InferedReturnValue<number>; //never가 된다! infer로 추론가능한 타입이 없으면 false로 인식됨 -> it's pretty obvious. there is no way any function type could be a super type of number type.

//다른 예시 -> infer를 사용해서 프로미스 타입의 반환값만 추출한 타입 만들기
type PromiseUnpack<T> = T extends Promise<infer R> ? R : never; //Promise는 제네릭이니까 반환할 타입을 전달해야하는데, 어떤 타입이 반환될지 아직 모름. 타입변수 T를 받아서 R을 추측해야함.
//1. T는 프로미스 타입이어야 한다
//2. 프로미스 타입의 결과값 타입을 반환해야한다

type PromiseNum = Promise<number>;
type PromiseUser = Promise<{ name: string; age: number }>;
let f: PromiseUnpack<PromiseNum>; //number
let g: PromiseUnpack<PromiseUser>; //{ name: string; age: number }
