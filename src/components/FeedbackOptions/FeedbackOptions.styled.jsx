import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  gap: 10px;
`;

export const Button = styled.button`
  padding: 10px 15px;
  background-color: transparent;
  border: 1px solid #d5d9d9;
  border-radius: 8px;
  box-shadow: rgba(213, 217, 217, 0.5) 0 2px 5px 0;
  font-size: 16px;
  font-weight: 500;
  text-transform: capitalize;
  cursor: pointer;
  &:hover {
    background-color: lightcyan;
    transform: translateY(-2px);
  }
  &:active {
    transform: translateY(2px);
  }
`;
