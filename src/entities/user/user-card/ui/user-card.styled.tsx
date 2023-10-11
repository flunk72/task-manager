import styled from 'styled-components';
import * as router from 'react-router-dom';

export const NavLink = styled(router.NavLink)`
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  border: 1px solid var(--white);
  text-decoration: none;
  color: var(--white);

  &:hover {
    background: var(--white);
    color: var(--black);
  }
`;
