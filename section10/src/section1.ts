/** 타입스크립트에서 자주 사용하는 유틸리티 타입들 */

// 1. Partial<T>
// -> 특정 객체 타입의 모든프로퍼티를 선택적 프로퍼티로 바꿔주는 유틸리티 타입
interface Post {
  title: string;
  auth: string;
  content: string;
  createdAt: string;
  thumbnail?: string;
}

//내용이 없는 임시 저장글도 같은 Post타입이지만 프로퍼티가 옵셔널일 뿐이잖아 -> Partial타입 사용해서 옵셔널 프로퍼티로 변경해줌
// let draftPost: Post = { title: '제목뭐하지', createdAt: '2023-11-01' };
let draftPost: Partial<Post> = { title: '제목뭐하지', createdAt: '2023-11-01' };

//partial타입 구현
type Partial<T> = {
  [key in keyof T]?: T[key];
};

//2.Requred<T>
// -> 특정 객체 타입의 모든프로퍼티를 필수 프로퍼티로 바꿔주는 유틸리티 타입

//썸네일이 꼭 있어야하는 포스트일때
let postWithThumbnail: Required<Post> = {
  title: '',
  auth: '',
  content: '',
  createdAt: '',
  thumbnail: '',
};

//required타입 구현
type Required<T> = {
  [key in keyof T]-?: T[key]; //?는 옵셔널이란 뜻이니까 필수값을 만드려면 ?의 부정형을 취해주면됨 -> '-?' 옵셔널을 빼겠다=필수로 만들겠다는 뜻
};

//3.Readonly<T>
// -> 특정 객체 타입의 모든프로퍼티를 읽기전용 프로퍼티로 바꿔주는 유틸리티 타입

let readonlyPost: Readonly<Post> = {
  title: '',
  auth: '',
  content: '보호된 콘텐츠입니다.',
  createdAt: '',
  thumbnail: '',
};

readonlyPost.title = 'title';

//readonly타입 구현
type Readonly<T> = {
  readonly [key in keyof T]: T[key];
};
