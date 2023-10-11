import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  height: 100vh;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: 70px 1fr;
  gap: 10px;
  grid-template-areas:
    'header header header'
    'sider content content';
`;
