import React, { useState } from 'react';
//타입스크립트에서는 jsx가 아닌 tsx로 생성
function Counter() {
  //useState의 초기값을 제네릭 number로 설정
  const [counter, setCouter] = useState<number>(0);
  const handCounter = () => {
    setCouter((prev) => prev++);
  };
  return <div onClick={handCounter}>{counter}</div>;
}

export default Counter;
