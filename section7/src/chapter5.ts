import { resolve } from 'path';
//프로미스 객체

//프로미스 객체의 실행자함수는 매개변수로 두가로 함수를 받는다. 하나는 성공했을때 호출될 함수, 다른 하나는 실패했을 때 호출될 함수.
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});

promise.then((res) => console.log(res));
//타입을 명시하지 않으면 unknown으로 promise의 반환값이 추론됨

const promiseWithGeneric = new Promise<number>((resolve, reject) => {
  setTimeout(() => {
    resolve(20);
  }, 2000);
});
//타입변수를 사용하면 성공했을 때 들어오는 값(비동기함수의 결과값)의 타입을 명시할 수 있다.

promiseWithGeneric.then((res) => {
  console.log(res);
  res.toFixed();
});

//에러는 any타입으로 들어오기때문에 프로젝트에 맞춰서 임의로 타입을 좁혀서 사용해야함.
promiseWithGeneric.catch((err) => {
  if (typeof err === 'string') {
    console.log(err);
  }
});

//promise를 반환하는 함수의 반환값의 지정할때는 어케 함? 실무에서는 api통신 등으로 그런걸 더 많이 쓰니까.

interface IPost {
  id: number;
  text: string;
  createdAt: string;
}

/** 3초 뒤에 게시글 데이터를 담은 promise를 반환하는 함수 */
function fetchPost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 123,
        text: 'hello world',
        createdAt: '2023-12-12',
      });
    }, 3000);
  });
}

const getPost = fetchPost();

getPost.then((res) => console.log(res)); //여기서도 당연히 반환값의 타입은 unknow으로 찍힘

function fetchPostWithPromise() {
  return new Promise<IPost>((resolve, reject) => {
    //이렇게 아까처럼 프로미스 객체에 반환값으 타입을 지정해줘도 된다.
    setTimeout(() => {
      resolve({
        id: 123,
        text: 'hello world',
        createdAt: '2023-12-12',
      });
    }, 3000);
  });
}

const getTypedPost = fetchPostWithPromise();

getTypedPost.then((res) => console.log(res.id)); //그러면 반환값의 타입이 명시된 IPost로 잘 추론됨

//하지만 promise를 반환하는 함수 전체의 반환값을 Promise<T> 형식으로 명시해줘도 된다
function fetchPostReturnPromise(): Promise<IPost> {
  //이렇게하면 fetchPostReturnPromise 함수의 반환값타입만 봐도 IPost 형식 객체가 담긴 Promise를 반환하는구나->를 알 수 있으니까.
  //함수가 길어지면 함수 전체를 뜯어보지 않아도 어떤걸 반환하는지 바로 알 수 있음. 가독성 측면에서 권장!
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        id: 123,
        text: 'hello world',
        createdAt: '2023-12-12',
      });
    }, 3000);
  });
}

const getTypedPostReturned = fetchPostWithPromise();

getTypedPostReturned.then((res) => console.log(res.id));
