import { ChangeEvent, useState } from 'react';
import * as S from '../styles/Styles';
import { QueryClient, useMutation } from 'react-query';
import { addTodo } from './todos';
import uuid from 'react-uuid';
const Input = () => {
  const [title, setTitle] = useState<string>('');
  const [content, setContent] = useState<string>('');

  const queryClient = new QueryClient();

  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });

  const addHandler = () => {
    const newTodo = {
      id: uuid(),
      content: content,
      title: title,
      isDone: false,
    };

    mutation.mutate(newTodo);
  };

  return (
    <S.InputWraper>
      <div>
        <div>
          제목:
          <S.InputStyle
            placeholder="제목을 입력해주세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setTitle(e.target.value)
            }
          />
        </div>
        <div>
          내용:
          <S.InputStyle
            placeholder="내용을 입력해주세요"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setContent(e.target.value)
            }
          />
        </div>
        <S.ButtonWraper>
          <S.ButtonStyle onClick={addHandler}>추가하기</S.ButtonStyle>
        </S.ButtonWraper>
      </div>
    </S.InputWraper>
  );
};

export default Input;
