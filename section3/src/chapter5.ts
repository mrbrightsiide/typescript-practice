//타입 추론 : 변수의 타입을 자동으로 추론하는 기능

function func(param) {} // 이런경우 매개변수의 타입을 추론하지 못해 오류가 난다

//그럼 언제 타입추론이 이뤄지지?
let a = 10; //변수를 선언하고 초기화하는 경우. 변수의 초기값을 기준으로 타입이 추론됨!
let b = 'hi';
let obj = {
  id: 1,
  name: 'sia',
  profile: {
    nuckname: 'shasha',
  },
}; //객체도 추론됨

const { id, name, profile } = obj;
let [one, two, three] = [1, 'two', true];
//구조분해 할당 시에도 추론됨

/*
any 타입의 진화
변수를 선언만하고 초기화하지 않으면, 암묵적으로 any로 추론됨. 그 뒤에 할당하는 값의 타입에 따라 추론된다. -> 명시적으로 any를 지정하는 것과는 다르게 동작함 !
*/
let aa;
aa = 10;
aa.toFixed();

aa = 'hi';
aa.toUpperCase();
aa.toFixed(); //29라인에서 aa가 string으로 진화했기 때문에 넘버 메소드를 사용하려면 오류가 남

let arr = [1, 'hi']; //유니온 타입으로 추론됨

const num = 10; //타입은 10
//const는 리터럴타입으로 추론이 됨 -> 당연함. const는 상수니까 추후에 다른 값이 들어올 일이 없으니 그냥 해당 값 자체로 추론된다
let num2 = 10; //타입은 number
// '타입 넓히기' -> let으로 선언한 변수는 상수보다 더 범용적인 타입으로 추론된다
