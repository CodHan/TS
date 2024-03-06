import * as S from '../styles/Styles';
const Input = () => {
  return (
    <S.InputWraper>
      <div>
        <div>
          제목:
          <S.InputStyle placeholder="제목을 입력해주세요" />
        </div>
        <div>
          내용:
          <S.InputStyle placeholder="내용을 입력해주세요" />
        </div>
        <S.ButtonWraper>
          <S.ButtonStyle>추가하기</S.ButtonStyle>
        </S.ButtonWraper>
      </div>
    </S.InputWraper>
  );
};

export default Input;
