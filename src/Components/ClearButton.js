import styled from 'styled-components';

const ClearButton = styled.button`
  font-size: ${(props) => props.size ?? '1rem'};
  background: none;
  border: none;
  padding: 0.1rem 0.5rem;
  transition: 100ms;
  &:hover {
    ${'' /* color: ${({ props }) => props.color ?? props.theme.accent}; */}
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    box-shadow: 0 5px 6px -6px rgba(32, 33, 36, 0.28);
  }
`;

export default ClearButton;
