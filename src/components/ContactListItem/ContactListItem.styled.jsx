import { styled } from 'styled-components';

export const Item = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    font-size: 24px;
    line-height: 0.6;
    font-weight: 600;
    span {
      padding-left: 6px;
      font-weight: 500;
      font-style: italic;
    }
  }
  button {
    cursor: pointer;
  }
`;
