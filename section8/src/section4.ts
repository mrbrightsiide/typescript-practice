/** 템플릿 리터럴 타입 */
//스트링 타입을 여러가지로 가변적으로 사용하고 싶을때. 실무에서 많이 사용하게되는 문법은 아님

type Color = 'red' | 'yellow' | 'blue';

type Animal = 'cat' | 'dog' | 'rabbit';

type ColoredAnimal = `${Color}_${Animal}`;

const cat: ColoredAnimal = 'red_cat';
const rabbit: ColoredAnimal = 'blue_rabbit';
