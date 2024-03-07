import { useEffect } from 'react';
import * as S from '../styles/Styles';
import DoneTodo from './DoneTodo';
import WorkingTodo from './WorkingTodo';
import api from '../components/api';

const Main = () => {
  useEffect(() => {
    try {
      api.get('/todos').then((res) => console.log(res.data));
    } catch (error) {
      console.error(error);
    }
  }, []);

  return (
    <S.MainWraper>
      <S.MainTitle>하는중..🔥</S.MainTitle>
      <div>
        <S.WorkingWraper>
          {/* 진행중카드 */}
          <WorkingTodo />
        </S.WorkingWraper>
      </div>
      <S.MainTitle>해냈다..!🚀</S.MainTitle>
      <S.WorkingWraper>
        {/* 완료된카드 */}
        <DoneTodo />
      </S.WorkingWraper>
    </S.MainWraper>
  );
};

export default Main;
