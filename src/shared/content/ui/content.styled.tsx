import styled from 'styled-components';

export const ContentWrapper = styled.div`
  grid-area: content;
  background: var(--background-layout);
  box-shadow: 0px 0px 10px 0px rgba(34, 60, 80, 0.2);

  &&& {
    .custom-button {
      width: 100%;
      margin: 0;
    }
    .custom-button:hover {
      font-family: var(--font-family);
      color: var(--white);
      background: var(--background-button-hover);
      border-color: var(--border-color-hover);
    }
  }
`;
