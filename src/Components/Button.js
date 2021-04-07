import styled from 'styled-components';
import ClearButton from './ClearButton';

const Button = styled(ClearButton)`
  background: ${(props) => props.background ?? 'none'};
  color: ${(props) => props.color ?? '#000'};
  border: 1px solid ${(props) => props.border ?? props.theme.mainLight};
  &:hover {
    background: ${(props) => props.backgroundHover ?? props.theme.accentDark};
    border: 1px solid ${(props) => props.border ?? props.theme.mainDark};
    color: ${(props) => props.colorHover ?? props.theme.lightText};
  }
  &:active {
    background: ${(props) => props.backgroundActive ?? props.theme.mainDark};
  }
`;

export default Button;
