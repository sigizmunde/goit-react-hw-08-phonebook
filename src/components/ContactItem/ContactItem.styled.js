import styled from 'styled-components';

export const ListItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  font-size: 14px;
  > span:not(:first-of-type) {
    margin-left: var(--min-gap);
  }
  > span:last-of-type {
    margin-left: auto;
  }
  button {
    font-size: 9px;
  }
`;
