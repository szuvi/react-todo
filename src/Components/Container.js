import styled from 'styled-components';

const Container = styled.div`
  ${(props) => props.centered && 'margin: 0 auto'};
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: ${(props) => props.gap ?? '0.5rem'};
  max-width: 500px;
`;

export default Container;
