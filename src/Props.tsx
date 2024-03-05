// import React, { useState } from 'react';

// function Parent() {
//   const [count, setCount] = useState<number>(0);
//   return <Child count={count}></Child>;
// }
// //객체 타입 정하기.
// function Child({ count }: { count: number }) {
//   return <div>{count}</div>;
// }

// export default Parent;

// type을 분리해서 적용하기
import { useState } from 'react';

function Parent() {
  const [count, setCount] = useState<number>(0);
  return <Child count={count}></Child>;
}
type Props = {
  count: number;
};
function Child({ count }: Props) {
  return <div>{count}</div>;
}

export default Parent;
