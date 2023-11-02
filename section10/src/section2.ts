interface Post {
  title: string;
  auth: string;
  content: string;
  createdAt: string;
  thumbnail?: string;
}

/**
 * Pick<T, U> -> 뽑다,고른다
 * -> 객체 타입으로부터 특정 프로퍼티만 골라내는 타입
 */

type LegacyPost = Pick<Post, 'title' | 'content'>;

//Pick타입 구현
type Pick<K, U extends keyof K> = {
  [key in U]: K[key];
};

/**
 * Omit<T, U> -> 생략하다, 빼다
 * -> 객체 타입으로부터 특정 프로퍼티만 제거한 타입
 */

type NoTitlePost = Omit<Post, 'title'>;

//Omit타입 구현
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

// Record타입 -> 객체보단 자유롭지만 인덱스드타입보다는 조금 제한된 타입이 필요할때 사용! 실무에서 자주 사용한다

type LegacyThumbnail = {
  large: {
    url: string;
  };
  small: {
    url: string;
  };
  medium: {
    url: string;
  };
  samll: {
    url: string;
  };
};

//동일한 패턴을 갖는 객체들을 쉽게 제한할 수 있다
type Thumbnail = Record<
  'large' | 'samll' | 'medium' | 'small',
  { url: string }
>;

//Record타입 구현
type Record<T extends keyof any, K> = { [key in T]: K };
//T는 어떤 객체가 올지는 모르겠지만 아무튼 그 객체의 key의 타입임을 명시함 -> T extends keyof any
