/** 타입 조작하기 -> 제네릭처럼 타입을 가변적으로 명시할 수 있는 ts의 기능들 */

//첫번째로 배워볼 것은 Indexed access 타입
//복잡하고 큰 타입으로부터 작은 부분의 타입만 뽑아올 수 있는 유용한 기능

interface Post {
  title: string;
  content: string;
  author: {
    id: number;
    name: string;
  };
}

function printAuthorInfo(author: { id: number; name: string }) {
  //만약 매개변수로 받는 author객체의 타입이 변경된다면? author를 참조하는 모든 곳을 수정해야한다.
  console.log(author.name);
}

function printAuthorInfoIndexed(author: Post['author']) {
  //Post[타입] 형태로 지정
  console.log(author.name);
}

//주의1.인덱스에 들어가는 문자열은 값이 아니고 타입이다!!!!

type auth = Post['author']; //이건 'author'라는 스트링 리터럴 타입을 대입한 것으로, 가능하지만
const str = 'author';
type authStr = Post[str]; //str을 대입하려고하면 불가능. str은 타입이 아닌 값이니까!

//객체말고도 배열로부터 특정 요소의 타입을 뽑아오는 것이 가능하다.

type PostList = Post[];

//number든 0이든 198347이든 타입으로 인식됨.
type postFromArr = PostList[number];
type postFromArr2 = PostList[0]; //0은 값이 아닌 타입!!!
type postFromArr3 = PostList[198347];
//Post객체로 이루어진 배열 PostList에서 해당 배열의 요소(=Post)의 타입만을 뽑아옴

const post: postFromArr = {
  title: 'hello world',
  content: 'hello world',
  author: {
    id: 123,
    name: 'sia',
  },
};

//배열의 요소 안의 특정 요소도 뽑아올 수 있다. (인덱스 중첩 가능)
type authFromArr = PostList[number]['author'];
type authFromArr2 = PostList[0]['author'];
//스트링 리터럴로 키값을 넣어주면 됨

const auth: authFromArr = {
  id: 124,
  name: 'sia',
};

//튜플로부터도 타입을 뽑아올 수 있다!
type tuple = [number, string, boolean];

type t1 = tuple[0]; //number
type t2 = tuple[1]; //string
type t3 = tuple[2]; //boolean
type t4 = tuple[3]; //인덱스 밖의 요소에 접근하면 당연히 오류남
type tNum = tuple[number]; //number로 지정하면, 해당 튜플이 가진 모든 타입의 유니온으로 추론된다
