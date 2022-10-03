import styled from '@emotion/styled';

export const Box = styled.li`
list-style: none;
display: inline;

`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  background-color: whitesmoke;
  padding: 8px;
  margin-right: 10px;
  cursor: pointer;

  &:active {
    background-color: aqua;
  }

  &:last-child {
    margin-right: 0;
  }
`;
