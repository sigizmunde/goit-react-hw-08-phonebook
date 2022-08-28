import styled from 'styled-components';

export const VertFlexSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: var(--min-gap);
  padding: var(--max-gap);
  border-radius: var(--min-gap);
  width: calc(var(--module-width) * 5);
  min-width: 320px;
  height: 50%;
  min-height: 415px;
  background-color: var(--back-color-1);
  > h2,
  > h3 {
    margin: var(--mid-gap) 0 var(--min-gap);
  }
`;

export const OneLine = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: baseline;
  justify-content: space-between;
  gap: 0.25em;
  width: 100%;
`;

export const SmallCaption = styled.p`
  font-size: 11px;
  margin: 0;
`;
