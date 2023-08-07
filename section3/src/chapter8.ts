/*
서로소 유니온 타입
교집합이 없는 타입들로만 만든 유니온타입
string | number같은것
*/

type Admin = { name: string; kickCount: number };
type Member = { name: string; point: number };
type Guest = {
  name: string;
  visitCount: number;
};

//tag라는 프로퍼티를 스트릴 리터럴로 정의하면 교집합이 존재하지 않게됨 -> 스트링리터럴은 1개만 정의할 수 있기때문에 존재할수가 없다! tag만 보고 ts컴파일러고 타입을 좁혀준다. 어떤 프로퍼티가 있을수 있고 어떤 프로퍼티가 없는지 tag의 값만 보고 바로 알 수 있다.

//tag로 타입을 분리할 수 있기 때문에, taged union이라고도함
