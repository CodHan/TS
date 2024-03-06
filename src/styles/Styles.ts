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
