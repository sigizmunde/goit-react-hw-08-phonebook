import styled from 'styled-components';

export const VertFlexSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--min-gap);
  padding: var(--max-gap);
  border-radius: var(--min-gap);
  width: calc(var(--module-width) * 8);
  min-width: 320px;
  max-height: 75%;
  background-color: var(--back-color-1);
  > h2,
  > h3 {
    margin: var(--mid-gap) 0 var(--min-gap);
  }
`;
