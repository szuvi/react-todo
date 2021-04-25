import styled from 'styled-components';
import ClearButton from './ClearButton';

const Button = styled(ClearButton)`
  background: ${(props) => props.background ?? 'none'};
  color: ${(props) => props.color ?? '#000'};
  border: 1px solid ${(props) => props.theme?.mainLight ?? 'rgb(223, 225, 229)'};
  &:hover {
    background: ${(props) =>
      props.backgroundHover ?? props.theme?.accentDark ?? 'rgb(0, 56, 102)'};
    border: 1px solid
      ${(props) =>
        props.border ?? props.theme?.mainDark ?? 'rgb(123, 125, 129)'};
    color: ${(props) =>
      props.colorHover ?? props.theme?.lightText ?? 'rgb(255, 255, 255);'};
  }
  &:active {
    background: ${(props) =>
      props.backgroundActive ?? props.theme.mainDark ?? 'rgb(123, 125, 129);'};
  }
`;

export default Button;
