import * as S from '../styles/Styles';
const DoneTodo = () => {
  return (
    <>
      <S.TodoWraper>
        <S.TodoContent>
          <div>제목:열심히 코딩하기</div>
          <div>내용:내용이다다다</div>
          <S.TodoButton>
            <button>취소</button>
            <button>삭제</button>
          </S.TodoButton>
        </S.TodoContent>
      </S.TodoWraper>
    </>
  );
};

export default DoneTodo;
