import * as S from '../styles/Styles';
import { deleteTodo, getTodos, updateTodo } from './todos';
import { useMutation, useQuery, useQueryClient } from 'react-query';
interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}
const DoneTodo = () => {
  const { isLoading, isError, data } = useQuery('todos', getTodos);
  const queryClient = useQueryClient();

  //삭제mutation
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
  //삭제버튼
  //확인
  const handDelete = (id: string) => {
    const confirm = window.confirm('정말 삭제합니까?');
    if (confirm) {
      deleteMutation.mutate(id);
    }
    return;
  };
  //업데이트mutation
  const updateMutation = useMutation(updateTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries('todos');
    },
  });
  //완료버튼
  const handIsDone = (id: string) => {
    const target = data.find((item: Todo) => item.id === id);
    const updateTodo = { ...target, isDone: !target.isDone };

    updateMutation.mutate({ id, updateTodo });
  };
  if (isLoading) {
    return <div>로딩중</div>;
  }
  if (isError) {
    return <div>에러발생</div>;
  }
  const filteredWorking = data.filter((item: Todo) => item.isDone === true);

  return (
    <>
      {filteredWorking.map((item: Todo) => {
        return (
          <S.TodoWraper key={item.id}>
            <S.TodoContent>
              <div>제목:{item.title}</div>
              <div>내용:{item.content}</div>
              <S.TodoButton>
                <button onClick={() => handIsDone(item.id)}>취소</button>
                <button onClick={() => handDelete(item.id)}>삭제</button>
              </S.TodoButton>
            </S.TodoContent>
          </S.TodoWraper>
        );
      })}
    </>
  );
};

export default DoneTodo;
