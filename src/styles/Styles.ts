import styled from 'styled-components';

// Header.tsx
export const HeaderWraper = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #ccc;
  & > div {
    font-size: 40px;
    color: blue;
  }
  & > div > span {
    font-size: 30px;
    color: red;
  }
`;

//Input.tsx
export const InputWraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > div {
    width: 30%;
    height: 200px;

    display: flex;
    flex-direction: column;
    font-size: 30px;
    font-weight: 600;
    align-items: flex-end;
    justify-content: center;
  }
`;
export const InputStyle = styled.input`
  width: 300px;
  height: 50px;
  margin: 15px 100px 0 5px;
`;
export const ButtonWraper = styled.div`
  margin: 15px 100px 0 5px;
`;
export const ButtonStyle = styled.button`
  width: 100px;
  height: 40px;
`;

// Main.tsx
export const MainWraper = styled.section`
  width: 100%;
  height: 800px;
  background-color: #ccc;
  font-size: 30px;
`;
export const MainTitle = styled.div`
  padding: 10px;
`;
export const WorkingWraper = styled.div`
  display: flex;
  gap: 20px;
`;
// Todo.tsx
export const TodoWraper = styled.section`
  width: 350px;
  border: 1px solid red;
  border-radius: 5px;
  margin: 10px 0 0 20px;
  font-size: 20px;
  display: flex;
  justify-content: center;
`;
export const TodoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 30px;
`;
export const TodoButton = styled.div`
  display: flex;
  gap: 20px;
  & > button {
    width: 70px;
    height: 30px;
    margin-top: 30px;
  }
`;
