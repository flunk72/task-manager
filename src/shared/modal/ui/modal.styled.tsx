import styled from 'styled-components';
import * as antd from 'antd';

export const ModalStyled = styled(antd.Modal)`
  width: 100%;
  .custom-button {
    font-family: var(--font-family);
    color: var(--black);
    background: rgba(221, 215, 215, 0.2);
    border-color: rgba(221, 215, 215, 0.9);
    width: 50%;
    margin: auto;
  }
`;
