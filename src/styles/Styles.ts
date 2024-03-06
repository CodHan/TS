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
