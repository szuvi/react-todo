import styled from 'styled-components';

const Input = styled.input`
  font-size: 1rem;
  padding: 0.3rem 0.5rem;
  border: 1px solid ${(props) => props.theme.mainLight};
  transition: all 0.05s;
  &:hover,
  &:active,
  &:focus,
  &:focus-within {
    box-shadow: 0 5px 6px -6px rgba(32, 33, 36, 0.28);
    outline: none;
    border: 1px solid ${(props) => props.theme.mainLight};
  }
`;

export default Input;
