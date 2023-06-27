/* unknown ->  모든 타입의 슈퍼타입. = 모든 타입에 업캐스팅이 가능하다. 다운캐스팅은 반대로 당연히 불가능*/
function unknown() {
  let a: unknown = 1;
  let b: unknown = 'hi';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // 다운캐스팅은 불가
  //   let unknownVar: unknown;
  //   let num: number = unknownVar;
  //   let str: string = unknownVar;
  //   let bool: boolean = unknownVar;
}

/* never -> 모든 타입의 공집합이기 때문에, 업캐스팅은 모두 가능. 다운캐스팅은 불가능! */
function neverFunc() {
  function nev(): never {
    while (true) {}
  }
  let num: number = nev();
  let str: string = nev();
  let bool: boolean = nev();

  //다운캐스팅은 불가 -> 어떤 값도 들어가면 안되는 함수 또는 변수를 명시할 때 사용하면 좋음
  //   let nev1: never = 1;
  //   let nev2: never = 'hi';
  //   let nev3: never = true;
}

/* void -  undefined의 슈퍼타입임을 주의하자 */
function voidFunc() {
  function voidexam(): void {}

  //다운캐스팅 불가
  let unde: undefined = voidexam();
}

/* any - 업캐스팅은 물론이고, 다운캐스팅도 가능함. 타입 계층도를 모두 무시하는 타입 
but, never타입에는 다운캐스팅 할 수 없음!
*/

//업캐스팅-다운캐스팅, 타입간의 호환 관계가 궁금하거나 헷갈리면 타입계층도를 보면서 개발하자
