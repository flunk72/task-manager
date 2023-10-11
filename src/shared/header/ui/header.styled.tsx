import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-area: header;
  display: flex;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);
  background: var(--background-layout);

  &&& {
    .custom-button:hover {
      font-family: var(--font-family);
      color: var(--white);
      background: var(--background-button-hover);
      border-color: var(--border-color-hover);
    }
  }
`;
