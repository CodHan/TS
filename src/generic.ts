//제네릭(generic)이란 데이터의 타입(data type)을 일반화 하는것. 즉, 변수화 하는것이다.

//<T> 이런 형태로 지정해두게 되면
type Generic<T> = {
  someValue: T;
};

//<string>,<number>등과 같이 지정해서 사용할 수 있다.
type Test = Generic<string>;

function someValue<T>(value: T) {}

someValue<string>('hi');
