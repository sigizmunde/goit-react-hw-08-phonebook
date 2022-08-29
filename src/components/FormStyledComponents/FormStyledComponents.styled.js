import styled from 'styled-components';

export const FormCaption = styled.h2`
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  margin: 0;
  margin-bottom: 8px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: var(--min-gap);
  padding: var(--mid-gap);
  border: var(--border-1);
  > label > input {
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  ${p => (p.disabled ? 'color: gray' : '')};
`;
