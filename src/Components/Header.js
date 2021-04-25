import styled from 'styled-components';

const Header = styled.h1`
  text-align: center;
  font-size: ${(props) => props.theme?.size ?? '1.8rem'};
`;

export default Header;
