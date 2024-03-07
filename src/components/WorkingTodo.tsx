import * as S from '../styles/Styles';
import { getTodos } from './todos';
import { useQuery } from 'react-query';
interface Todo {
  id: number;
  title: string;
  content: string;
  isDone: boolean;
}

const WorkingTodo = () => {
  const { isLoading, isError, data } = useQuery('todos', getTodos);

  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러발생</div>;
  }
  const filteredWorking = data.filter((item: Todo) => item.isDone === false);

  return (
    <>
      {filteredWorking?.map((item: Todo) => {
        return (
          <S.TodoWraper key={item.id}>
            <S.TodoContent>
              <div>제목:{item.title}</div>
              <div>내용:{item.content}</div>
              <S.TodoButton>
                <button>완료</button>
                <button>삭제</button>
              </S.TodoButton>
            </S.TodoContent>
          </S.TodoWraper>
        );
      })}
    </>
  );
};

export default WorkingTodo;
